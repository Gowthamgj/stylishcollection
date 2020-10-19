import React from "react";
import { storiesdataset } from "./meta/datafile";
import "./styles/navstories.css";

export default class Navstories extends React.Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this);
    this.state = {
      dataSet: storiesdataset,
      activeid: "1",
      leftind: 0,
      righind: 4
    };
  }
  move(dir) {
    if (
      dir === "right" &&
      this.state.righind <= this.state.dataSet.length - 2
    ) {
      let newArray = [...this.state.dataSet];
      for (let i = this.state.leftind; i < this.state.righind + 2; i++) {
        if (i === this.state.leftind || i === this.state.righind + 1) {
          newArray[i] = { ...newArray[i], active: !newArray[i].active };
        }
      }
      let act = this.state.leftind + 2;
      this.setState({
        activeid: act + ""
      });

      this.setState({
        dataSet: newArray,
        leftind: this.state.leftind + 1,
        righindt: this.state.righind + 1
      });
    } else if (dir === "left" && this.state.leftind >= 1) {
      let newArray = [...this.state.dataSet];
      for (let i = this.state.righind; i > this.state.leftind - 2; i--) {
        console.log(i, this.state.leftind, this.state.righind);
        if (i === this.state.leftind - 1 || i === this.state.righind) {
          console.log(i);
          newArray[i] = { ...newArray[i], active: !newArray[i].active };
        }
      }
      let act = this.state.leftind - 1;
      this.setState({
        activeid: act + ""
      });
      this.setState({
        dataSet: newArray,
        leftind: this.state.leftind - 1,
        righindt: this.state.righind - 1
      });
    }
  }
  render() {
    return (
      <div className="navstoriescontainer">
        <div
          className={`lefticon`}
          onClick={() => {
            this.move("left");
          }}
        >
          &lt;
        </div>
        <div className="iconcontainer">
          {this.state.dataSet.map((d) => {
            return (
              <img
                key={d.id}
                onClick={() => {
                  this.setState({ activeid: d.id });
                }}
                className={`naviconstories ${!d.active ? "hidenicon" : ""} ${
                  this.state.activeid === d.id ? "iconhighlighborder" : ""
                }`}
                src={d.imgurl}
                alt={d.id}
              />
            );
          })}
        </div>
        <div
          className={`righticon`}
          onClick={() => {
            this.move("right");
          }}
        >
          &gt;
        </div>
      </div>
    );
  }
}
