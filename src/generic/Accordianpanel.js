import React from "react";
import { emitter } from "../index";
import "../styles/accordian.css";
export default class Accordianpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.selectTab = this.selectTab.bind(this);
  }
  selectTab(id) {
    emitter &&
      emitter.emit(`accodianpreselect${this.props.parentid}`, {
        preselect: id
      });
    this.setState({ active: !this.state.active });
  }
  componentDidMount() {
    emitter.on &&
      emitter.on(`accordian${this.props.parentid}`, (id) => {
        if (id.preselect === this.props.id) {
          this.setState({ active: true });
        }
      });
  }
  render() {
    return (
      <div id={this.props.id}>
        <div
          className="itemHead"
          onClick={() => {
            this.selectTab(this.props.id);
          }}
        >
          <h4 className="title">{this.props.title}</h4>
          {this.state.active ? (
            <span className="chev">&#8963;</span>
          ) : (
            <span className="chev">&#8964;</span>
          )}
          <br />
          <p className="subtitle">{this.props.subtitle}</p>
        </div>
        {this.state.active ? (
          <div className="itemContent">{this.props.children}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
