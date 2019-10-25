const main = document.querySelector('#main')

// render all the issues

function renderIssues(allIssues) {
  return allIssues.map(renderIssue).join('')
  // console.log(newIssueObjs)

}

// render and return one issue

function renderIssue(issue) {
  const newIssue = new Issue(issue)
  // console.log(newIssue)
  const newIssueRendered = newIssue.render()
  // console.log(newIssueRendered)
  return newIssueRendered
}


// handle search input for year

function handleYearSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  const filteredIssues = allIssues.filter(issueObj => {

    return issueObj.year == event.target.value
  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle issue input for issue

function handleIssueSearchInput(event, allIssues, main) {
  // console.log(event.target)
  const filteredIssues = allIssues.filter(issueObj => {
    // console.log(issueObj)
    if (issueObj.issue) {
      return issueObj.issue.toLowerCase().includes(event.target.value.toLowerCase())
    }
  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle search input for issue num

function handleIssueNumSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  // console.log(allIssues)
  const filteredIssues = allIssues.filter(issueObj => {
    // console.log(issueObj)
    return issueObj.issue_num == event.target.value
  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle search input for media

function handleMediaSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  const filteredIssues = allIssues.filter(issueObj => {
    if (issueObj.media) {
      return issueObj.media.toLowerCase().includes(event.target.value.toLowerCase())
    }

  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle search input for creator

function handleCreatorSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  const filteredIssues = allIssues.filter(issueObj => {
    if (issueObj.creator) {
      return issueObj.creator.toLowerCase().includes(event.target.value.toLowerCase())
    }

  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle search input for title

function handleTitleSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  const filteredIssues = allIssues.filter(issueObj => {
    if (issueObj.title) {
      return issueObj.title.toLowerCase().includes(event.target.value.toLowerCase())
    }

  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle search input for title

function handleSubTitleSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  const filteredIssues = allIssues.filter(issueObj => {
    if (issueObj.sub_title) {
      return issueObj.sub_title.toLowerCase().includes(event.target.value.toLowerCase())
    }

  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
// done

// handle search input for title

function handleMiscSearchInput(event, allIssues, main) {
  // console.log(event.target.value)
  const filteredIssues = allIssues.filter(issueObj => {
    if (issueObj.misc) {
      return issueObj.misc.toLowerCase().includes(event.target.value.toLowerCase())
    }

  })
  const filteredIssuesHTML = renderIssues(filteredIssues)
  main.innerHTML = filteredIssuesHTML ? filteredIssuesHTML : `<p><center>There are no matching issues here</center></p>`
}
