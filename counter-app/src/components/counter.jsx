import React, { Component } from "react";
import bootstrap from "bootstrap";

class Counter extends Component {
  state = { counter: 0 ,
  tags: ["tag1", "tag2", "tag3"]};

  style = { fontSize: 30, fontWeight: "bold" };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags</p>;
    return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
  }

  constructor()
  {
    super();
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement =  () =>
  {
    this.setState({counter:this.state.counter+1});
    console.log(this.state2.counter);
  }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.state.counter}
        </span>
        <button onClick={this.handleIncrement}>Increment</button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.counter === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }
}

export default Counter;
