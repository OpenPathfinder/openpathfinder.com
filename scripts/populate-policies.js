const { writeFileSync, existsSync, readFileSync } = require('fs')
const { updateOrCreateSegment } = require('@ulisesgascon/text-tags-manager')
const path = require('path')

const policies = require('../data/policies.json')
const descriptionStartTag = '<!-- DESCRIPTION:START -->'
const descriptionEndTag = '<!-- DESCRIPTION:END -->'
const technicalDetailsStartTag = '<!-- TECHNICAL-DETAILS:START -->'
const technicalDetailsEndTag = '<!-- TECHNICAL-DETAILS:END -->'
const listStartTag = '<!-- LIST:START -->'
const listEndTag = '<!-- LIST:END -->'

// @TODO: Move this function to a shared file
const replaceMetadata = (fileContent, metadata) => {
  return fileContent.replace(/---[^]*?---/, metadata)
}

// Prepare the markdown files
policies.forEach((policy, index) => {
  const metadata = `---
sidebar_position: ${index + 1}
id: ${policy.name}
title: ${policy.title}
slug: /policies/${policy.name}
---`.trim()
  const descriptionContent = `## Description
${policy.description}`.trim()
  const technicalDetailsContent = `## Technical Details
${policy.technicalDetails}`.trim()

  let fileContent = `${metadata}

${descriptionStartTag}
${descriptionContent}
${descriptionEndTag}

${technicalDetailsStartTag}
${technicalDetailsContent}
${technicalDetailsEndTag}
`
  const updateContent = (currentContent) => {
    fileContent = currentContent
    replaceMetadata(fileContent, metadata)
    fileContent = updateOrCreateSegment({
      original: fileContent,
      replacementSegment: descriptionContent,
      startTag: descriptionStartTag,
      endTag: descriptionEndTag
    })
    fileContent = updateOrCreateSegment({
      original: fileContent,
      replacementSegment: technicalDetailsContent,
      startTag: technicalDetailsStartTag,
      endTag: technicalDetailsEndTag
    })
  }

  const destination = path.join(process.cwd(), `docs/policies/${policy.name}.mdx`)
  const fileExists = existsSync(destination)
  if (fileExists) {
    const currentFileContent = readFileSync(destination, 'utf8')
    updateContent(currentFileContent)
  }
  writeFileSync(destination, fileContent)
})

// Update the policies list
const policiesList = policies.map((policy) => {
  return `- ${policy.title} ([${policy.name}](/docs/policies/${policy.name}))`
}).join('\n')


const policiesListDestination = path.join(process.cwd(), 'docs/projects/fortSphere/policies.md')
policiesListFileContent = readFileSync(policiesListDestination, 'utf8')

policiesListFileContent = updateOrCreateSegment({
  original: policiesListFileContent,
  replacementSegment: policiesList,
  startTag: listStartTag,
  endTag: listEndTag
})

writeFileSync(policiesListDestination, policiesListFileContent)
