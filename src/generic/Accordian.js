import React from "react";
import { emitter } from "../index";

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: "" };
    this.selectMethod = this.selectMethod.bind(this);
  }
  selectMethod(id) {
    // emitter && emitter.emit(`accordiansel${id}`,{preselect:id})
  }
  componentDidMount() {
    emitter &&
      emitter.emit(`accordian${this.props.id}`, {
        preselect: this.props.preselect
      });
    emitter.on &&
      emitter.on(`accodianpreselect${this.props.id}`, (id) => {
        this.setState({ selectedTab: id.preselect });
        // this.selectMethod(id.preselect)
      });
  }
  render() {
    return (
      <div className="accordian" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
