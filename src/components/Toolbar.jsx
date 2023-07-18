import React, { Component } from "react";

export class Toolbar extends Component {
  
  filters() {
    const { filters, selected, onSelectFilter } = this.props;
    let filtersList = []
    let filter
    for (let i = 0; i < filters.length; i++) {
      filter = <button className="filter-btn" key={i} onClick={(e) => onSelectFilter(e.target.innerText)}>{filters[i]}</button>
      if (filters[i] === selected){
        filter = <button className="filter-btn selected" key={i} onClick={(e) => onSelectFilter(e.target.innerText)}>{filters[i]}</button> 
      }
      filtersList.push(filter)
    }
    return filtersList
  }

  render() {
    const filters = this.filters()
    return (
      <div className="toolbar">{filters}</div>
    );
  }
}
