const { writeFileSync, existsSync, readFileSync } = require('fs')
const { updateOrCreateSegment } = require('@ulisesgascon/text-tags-manager')
const path = require('path')

const checklists = require('../data/checklists.json')

const listStartTag = '<!-- LIST:START -->'
const listEndTag = '<!-- LIST:END -->'

const sortByPriority = (a, b) => {
    const [aLetter, aNumber] = a.priority_group.match(/[A-Z]+|\d+/g);
    const [bLetter, bNumber] = b.priority_group.match(/[A-Z]+|\d+/g);
    return aLetter.localeCompare(bLetter) || aNumber - bNumber;
}

const slugify = (text) => {
    //remove dots and convert to lowercase
    return text.replace(/\./g, '').toLowerCase()
}

const intro = checklists.map(checklist => {
    return `- [${checklist.author}: ${checklist.title}](/docs/visionBoard/checklists#${slugify(checklist.code_name)})`
}).join('\n')

checklistsListContent = `## Official Checklists

Here you can find the official checklists for the Vision Board project:
${intro}

${checklists.map(checklist => {
const detail = `### ${checklist.code_name}
- **Author**: ${checklist.author}
- **Title**: ${checklist.title}
- **Description**: ${checklist.description}
- **Details**: [${checklist.code_name}](/docs/checklists/${checklist.code_name})`

const checkListDetail = `## ${checklist.code_name} Checklist
- **Author**: ${checklist.author}
- **Title**: ${checklist.title}
- **Description**: ${checklist.description}


| Priority | Check | details | Info |
| --- | --- | --- | --- |
${checklist.checks
    .sort(sortByPriority)
    .map(check => {
        return `| ${check.priority_group} | ${check.code_name} | ${check.title} | [Doc](/docs/checks/${check.code_name}) |`.trim()
    }).join('\n')}
    `

const checkListDestination = path.join(process.cwd(), `docs/checklists/${checklist.code_name}.md`)
writeFileSync(checkListDestination, checkListDetail)

return detail
}).join('\n')


}
`

const checklistsListsDestination = path.join(process.cwd(), 'docs/projects/visionBoard/checklists.md')
checklistsListFileContent = readFileSync(checklistsListsDestination, 'utf8')

checklistsListFileContent = updateOrCreateSegment({
    original: checklistsListFileContent,
    replacementSegment: checklistsListContent,
    startTag: listStartTag,
    endTag: listEndTag
})

writeFileSync(checklistsListsDestination, checklistsListFileContent)
