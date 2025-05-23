const { writeFileSync, existsSync, readFileSync } = require('fs')
const { updateOrCreateSegment } = require('@ulisesgascon/text-tags-manager')
const path = require('path')

const checks = require('../data/checks.json')
const bannerContentStartTag = '<!-- BANNER:START -->'
const bannerContentEndTag = '<!-- BANNER:END -->'
const descriptionStartTag = '<!-- DESCRIPTION:START -->'
const descriptionEndTag = '<!-- DESCRIPTION:END -->'
const detailsStartTag = '<!-- DETAILS:START -->'
const detailsEndTag = '<!-- DETAILS:END -->'
const listStartTag = '<!-- LIST:START -->'
const listEndTag = '<!-- LIST:END -->'

// @TODO: Move this function to a shared file
const replaceMetadata = (fileContent, metadata) => {
  return fileContent.replace(/---[^]*?---/, metadata)
}

const addImplementationDetails = (check) => {
  if (!check.implementation_type) {
    return ''
  }
  let content = `- Implementation Details: It is ${check.implementation_type}`
  if (check.implementation_details_reference) {
    content += ` ([details](${check.implementation_details_reference})).`
  }
  return content
}

const addContent = (title, urls=[]) => {
  let content = ''
  if(urls.length) {
    content = urls.map((item) => {
      return `- ${title}: [${item.name}](${item.url})`
    }).join('\n')
  } 

  return content
}

const renderDetails = (check) => {
  const implementationDetails = addImplementationDetails(check)
  const mitreDetails = addContent('Mitre',  check.resources.mitre)
  const sourcesDetails = addContent('Sources', check.resources.sources)
  const howToDetails = addContent('How To', check.resources.how_to)
  let content = '## Details\n'
  content += `- Default Category: ${check.default_section_name}\n`
  content += `- Default Priority Group: ${check.default_priority_group}\n`
  if (implementationDetails) {
    content += `${implementationDetails}\n`
  }
  content += `- C-SCRM: ${check.is_c_scrm}\n`
  if (mitreDetails) {
    content += `${mitreDetails}\n`
  }
  if (sourcesDetails) {
    content += `${sourcesDetails}\n`
  }
  if (howToDetails) {
    content += `${howToDetails}\n`
  }
  return content
}

// Prepare the markdown files
checks.forEach((check, index) => {
  const metadata = `---
sidebar_position: ${index + 1}
id: ${check.id}
title: ${check.title}
slug: /checks/${check.code_name}
---`.trim()
  //@TODO: Remove adhoc check for description when https://github.com/OpenPathfinder/visionBoard/issues/159 is fixed
  const bannerContent = check.implementation_status === 'completed' ? '' : `
:::tip

This check is currently under development and not yet implemented. [Click here to learn how you can help](/contribute).

:::
`.trim()
  
const descriptionContent = `
## Description
${!check.description.includes('<') && !check.description.startsWith('{') ? check.description : ''}`.trim()
  const detailsContent = renderDetails(check)

  let fileContent = `${metadata}

${bannerContentStartTag}
${bannerContent}
${bannerContentEndTag}
  
## Use Case

${descriptionStartTag}
${descriptionContent}
${descriptionEndTag}

${detailsStartTag}
${detailsContent}
${detailsEndTag}
`
  const updateContent = (currentContent) => {
    fileContent = currentContent
    replaceMetadata(fileContent, metadata)
    fileContent = updateOrCreateSegment({
      original: fileContent,
      replacementSegment: bannerContent,
      startTag: bannerContentStartTag,
      endTag: bannerContentEndTag
    })
    fileContent = updateOrCreateSegment({
      original: fileContent,
      replacementSegment: descriptionContent,
      startTag: descriptionStartTag,
      endTag: descriptionEndTag
    })
    fileContent = updateOrCreateSegment({
      original: fileContent,
      replacementSegment: detailsContent,
      startTag: detailsStartTag,
      endTag: detailsEndTag
    })
  }

  const destination = path.join(process.cwd(), `docs/checks/${check.code_name}.mdx`)
  const fileExists = existsSync(destination)
  if (fileExists) {
    const currentFileContent = readFileSync(destination, 'utf8')
    updateContent(currentFileContent)
  }
  writeFileSync(destination, fileContent)
})

// Populate lists
const checksList = checks.map((check) => {
  return `- **[${check.code_name}](/docs/checks/${check.code_name})**: ${check.title} `
}).join('\n')

const checksListDestination = path.join(process.cwd(), 'docs/projects/visionBoard/checks.md')
checksListFileContent = readFileSync(checksListDestination, 'utf8')

checksListFileContent = updateOrCreateSegment({
  original: checksListFileContent,
  replacementSegment: checksList,
  startTag: listStartTag,
  endTag: listEndTag
})

writeFileSync(checksListDestination, checksListFileContent)
