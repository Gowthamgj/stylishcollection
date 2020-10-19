import React from "react";
import "./styles/navigation.css";
import search from "./images/search.png";
import user from "./images/userprofile.png";
import trolley from "./images/trolley.png";
import { tabs, homemenuitem, tabMap } from "./meta/datafile";
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "1",
      showMenu: false,
      openMenu: false,
      activeTab: "1",
      activeTab1: 11
    };
    this.menuitem = tabs;
    this.homemenuitem = homemenuitem;
    this.routerMatch = tabMap;
    this.menuSelecion = this.menuSelecion.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.menuareselection = this.menuareselection.bind(this);
  }
  setSelected(id) {
    this.setState({ selected: id });
  }
  componentDidMount() {
    this.setState({ showMenu: window.innerWidth <= 760 });
    window.addEventListener("resize", () => {
      this.setState({ showMenu: window.innerWidth <= 760 });
    });
  }
  menuSelecion(id, flag, url) {
    if (this.state.showMenu && flag === "realmenu") {
      this.setState({ openMenu: !this.state.openMenu });
    }
    this.props.menuclicked(true);
    this.setState({ activeTab: id });
    this.props.switchlayout(id, [url]);
  }
  menuareselection(id, flag, url) {
    if (this.state.showMenu && flag === "realmenu") {
      this.setState({ openMenu: !this.state.openMenu });
    }
    this.setState({ activeTab1: id });
    this.props.switchlayout(id, [url]);
  }
  render() {
    return (
      <>
        {this.state.openMenu ? (
          <div className="overlay">
            <div
              onClick={() => {
                this.setState({ openMenu: !this.state.openMenu });
                this.props.menuclicked(true);
              }}
              className="closeicon"
            >
              &#128473;
            </div>
            {this.menuitem.map((t) => {
              return (
                <li
                  className={`${
                    this.state.activeTab === t.id ? "showactive " : ""
                  }`}
                  onClick={() => {
                    this.menuSelecion(t.id, "realmenu", this.routerMatch[t.id]);
                  }}
                  key={t.id}
                >
                  {t.name}
                </li>
              );
            })}
            <hr />
            {this.homemenuitem.map((t) => {
              return (
                <li
                  onClick={() => {
                    this.menuareselection(t.id, "realmenu", ["/#testimoni"]);
                  }}
                  className={`${
                    this.state.activeTab1 === t.id ? "showactive " : ""
                  }${t.id === 1 ? "firstlist " : ""}`}
                  key={t.id}
                >
                  {t.name}
                </li>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className="navpanel">
          <div
            className="navs firstchild"
            onClick={() => {
              window.history.go((window.history.length - 1) * -1);
            }}
          >
            MADE UP
          </div>
          {!this.state.showMenu ? (
            <div className="navcontainer">
              <div
                className={`navs ${
                  this.state.selected === 1 ? "selected" : ""
                }`}
                onClick={() => {
                  this.setSelected(1);
                }}
              >
                For Me
              </div>
              <div
                className={`navs ${
                  this.state.selected === 2 ? "selected" : ""
                }`}
                onClick={() => {
                  this.setSelected(2);
                }}
              >
                Jeans
              </div>
              <div
                className={`navs ${
                  this.state.selected === 3 ? "selected" : ""
                }`}
                onClick={() => {
                  this.setSelected(3);
                }}
              >
                Shirt
              </div>
              <div
                className={`navs ${
                  this.state.selected === 4 ? "selected" : ""
                }`}
                onClick={() => {
                  this.setSelected(4);
                }}
              >
                Trousers
              </div>
              <div
                className={`navs ${
                  this.state.selected === 5 ? "selected" : ""
                }`}
                onClick={() => {
                  this.setSelected(5);
                }}
              >
                Joggers
              </div>
              <div
                className={`navs ${
                  this.state.selected === 6 ? "selected" : ""
                }`}
                onClick={() => {
                  this.setSelected(6);
                }}
              >
                Shorts
              </div>
              <div
                className="navsicon"
                onClick={() => {
                  this.menuSelecion("1", "realmenu", this.routerMatch["1"]);
                }}
              >
                <img src={user} alt="usrprofile" />
              </div>
              <div
                className="navsicon"
                onClick={() => {
                  this.menuSelecion("2", "", this.routerMatch["2"]);
                }}
              >
                <img src={trolley} alt="trolly" />
              </div>
              <div className="navsicon">
                <img src={search} alt="search" />
              </div>
            </div>
          ) : (
            <div className="naviconcontainer">
              <div
                className="navsicon"
                onClick={() => {
                  this.setState({ openMenu: !this.state.openMenu });
                  this.props.menuclicked(false);
                }}
              >
                &#9776;
              </div>
              <div
                className="navsicon trolly"
                onClick={() => {
                  this.menuSelecion("2", "", this.routerMatch["2"]);
                }}
              >
                <img src={trolley} alt="trolly" />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
