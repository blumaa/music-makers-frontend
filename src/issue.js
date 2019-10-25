class Issue {
  constructor(issue) {
    this.id = issue.id,
    this.year = issue.year,
    this.issue = issue.issue,
    this.issueNum = issue.issue_num,
    this.media = issue.media,
    this.creator = issue.creator,
    this.title = issue.title,
    this.subTitle = issue.sub_title,
    this.misc = issue.misc
  }

  render() {
    return( `
      <div class="col s12 12">
        <div class="card teal lighten-3 z-depth-4">
          <div class="card-content blue-grey-text darken-4">

          <li id="${this.id}" data-year="${this.year}" data-issue="${this.issue}">
            <h5>Year: ${this.year}</h5>
            <p>Issue: ${this.issue} | Issue Number: ${this.issueNum}</p>
            <p>Type: ${this.media}</p>
            <p>Kind of Creator: ${this.creator}</p>
            <p>Issue Title: ${this.title}</p>
            <p>Sub Title: ${this.subTitle}</p>
            <p>Miscellaneous: ${this.misc}</p>
          </li>
          </div>
        </div>
      </div>
      `)
  }
}
