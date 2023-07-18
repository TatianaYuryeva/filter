import React, { Component } from "react";

export class ProjectList extends Component {
  
  list() {
    const { items } = this.props;
    //console.log(items)
    let projectList = []
    let img
    for (let i = 0; i < items.length; i++) {
      img = <img src={items[i].img} className="portfolio-img" category={items[i].category} key={i} alt="Project image" />
      projectList.push(img)
    }
    return projectList
  }

  render() {
    const projectList = this.list()
    return (
      <div>
        {projectList}
      </div>
    );
  }
}