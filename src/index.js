document.addEventListener('DOMContentLoaded', () => {
  let allIssues = []
  const main = document.querySelector('#main')
  const yearSearchInput = document.querySelector('#year-search-form')
  const issueSearchInput = document.querySelector('#issue-search-form')
  const issueNumSearchInput = document.querySelector('#issueNum-search-form')
  const mediaSearchInput = document.querySelector('#media-search-form')
  const creatorSearchInput = document.querySelector('#creator-search-form')
  const titleSearchInput = document.querySelector('#title-search-form')
  const subTitleSearchInput = document.querySelector('#subTitle-search-form')
  const miscSearchInput = document.querySelector('#misc-search-form')

  console.log('music makers')

// Get all the issues
    fetch('https://music-makers-backend.herokuapp.com/issues')
      .then(resp => resp.json())
      .then(issueData => {
        allIssues = issueData
        // console.log(allIssues)
        main.innerHTML = renderIssues(allIssues)
      })

  yearSearchInput.addEventListener('input', (event) => {
    handleYearSearchInput(event, allIssues, main)
  })
  // done

  issueSearchInput.addEventListener('input', (event) => {
    handleIssueSearchInput(event, allIssues, main)
  })
  // done

  issueNumSearchInput.addEventListener('input', (event) => {
    handleIssueNumSearchInput(event, allIssues, main)
  })
  // done

  mediaSearchInput.addEventListener('input', (event) => {
    handleMediaSearchInput(event, allIssues, main)
  })
  // done

  creatorSearchInput.addEventListener('input', (event) => {
    handleCreatorSearchInput(event, allIssues, main)
  })
  // done

  titleSearchInput.addEventListener('input', (event) => {
    handleTitleSearchInput(event, allIssues, main)
  })

  subTitleSearchInput.addEventListener('input', (event) => {
    handleSubTitleSearchInput(event, allIssues, main)
  })
  miscSearchInput.addEventListener('input', (event) => {
    handleMiscSearchInput(event, allIssues, main)
  })

})
