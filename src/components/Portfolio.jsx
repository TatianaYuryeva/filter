import React, { Component } from "react";
import { ProjectList } from "./ProjectList";
import { Toolbar } from "./Toolbar";

export class Portfolio extends Component {
  state = { selected: 'All'}

  constructor(props) {
    super(props)
    this.selectFilter = this.selectFilter.bind(this)
    this.filterItems = this.filterItems.bind(this)
  }

  selectFilter(filter) {
    this.setState({selected: filter})
  }

  filterItems(items) {
    return this.state.selected === 'All' ? items : items.filter((item) => 
      item.category === this.state.selected
    )
  }

  render() {
    const { items } = this.props;

    return (
      <div className="main-content">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.selected}
          onSelectFilter={(filter) => {this.selectFilter(filter);}}/>
        <ProjectList items={this.filterItems(items)}/>
      </div>
    );
  }
}