const { writeFileSync, existsSync, readFileSync } = require('fs')
const { updateOrCreateSegment } = require('@ulisesgascon/text-tags-manager')
const path = require('path')

const checks = require('../data/checks.json')
const bannerContentStartTag = '<!-- BANNER:START -->'
const bannerContentEndTag = '<!-- BANNER:END -->'
const levelsStartTag = '<!-- LEVELS:START -->'
const levelsEndTag = '<!-- LEVELS:END -->'
const descriptionStartTag = '<!-- DESCRIPTION:START -->'
const descriptionEndTag = '<!-- DESCRIPTION:END -->'
const detailsStartTag = '<!-- DETAILS:START -->'
const detailsEndTag = '<!-- DETAILS:END -->'

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

const addContent = (title, description, url) => {
  if (!description && !url) {
    return ''
  }

  if (url) {
    return `- ${title}: [${description}](${url})`
  }

  return `- ${title}: ${description}`
}

const renderDetails = (check) => {
  const implementationDetails = addImplementationDetails(check)
  const mitreDetails = addContent('Mitre', check.mitre_description, check.mitre_url)
  const sourcesDetails = addContent('Sources', check.sources_description, check.sources_url)
  const howToDetails = addContent('How To', check.how_to_description, check.how_to_url)
  let content = '## Details\n'
  if (implementationDetails) {
    content += `${implementationDetails}\n`
  }
  content += `- C-SCRM: ${check.is_c_scrm}\n`
  content += `- Priority Group: ${check.priority_group}\n`
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
  const levelsContent = `
- Incubating: ${check.level_incubating_status}
- Active: ${check.level_active_status}
- Retiring: ${check.level_retiring_status}
`.trim()
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
${levelsStartTag}
${levelsContent}
${levelsEndTag}

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
      replacementSegment: levelsContent,
      startTag: levelsStartTag,
      endTag: levelsEndTag
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