import React from "react";
import Accordian from "./generic/Accordian";
import Accordianpanel from "./generic/Accordianpanel";
import {
  Button,
  Grid,
  GridCol,
  InputEle,
  TabPane
} from "./generic/generalfunctions";
import Tabs from "./generic/Tabs";
import grish from "./images/grish.png";
import { orderDetails, tabMap } from "./meta/datafile";
import "./styles/userarena.css";

export default class UserAreana extends React.Component {
  constructor(props) {
    super(props);
    this.orderDetails = orderDetails;
    this.state = {
      isMobileDevice: this.props.isMobileDevice,
      selectedTab: "1",
      isTabletDevice: this.props.isTabletDevice
    };
    this.tabMap = tabMap;
    this.mobileVerticalView = this.mobileVerticalView.bind(this);
    this.desktopHorizontalView = this.desktopHorizontalView.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      isMobileDevice: nextProps.isMobileDevice,
      isTabletDevice: nextProps.isTabletDevice,
      selectedTab: nextProps.selectedTab
    };
  }
  mobileVerticalView() {
    return (
      <Accordian id="userdet" preselect={this.tabMap[this.state.selectedTab]}>
        <Accordianpanel
          id="profile"
          parentid="userdet"
          title="My Profile"
          subtitle="Notifications, password"
        >
          <Grid>
            <GridCol total="7" col="1">
              <InputEle type="text" placeholder="First name" />
            </GridCol>
            <GridCol total="7" col="2">
              <InputEle type="text" placeholder="Last name" />
            </GridCol>
            <GridCol total="7" col="3">
              <InputEle type="email" placeholder="Email" />
            </GridCol>
            <GridCol total="7" col="4">
              <InputEle type="text" placeholder="Phone number" />
            </GridCol>
            <GridCol total="7">
              <InputEle type="password" placeholder="Password" />
            </GridCol>
            <GridCol total="7" col="7">
              <InputEle type="password" placeholder="Confirm Passwrod" />
            </GridCol>
            <GridCol total="7" cols="7">
              <Button title="SAVE CHANGES" size="medium" type="dark" />
            </GridCol>
          </Grid>
        </Accordianpanel>
        <Accordianpanel
          id="wishlist"
          parentid="userdet"
          title="My Orders"
          subtitle="Already have 12 orders"
        >
          <div>
            <h6 className="ordertitle">Pending Orders</h6>
            {this.orderDetails.map((o) => {
              return (
                <div className="ordercontainer" key={o.id}>
                  <img className="orderimg" src={o.imgurl} alt="ordrimg" />
                  <span className="producticon">&gt;</span>
                  <div className="orderdesccontainer">
                    <p className="orderid">Order #{o.orderid}</p>
                    <p className="orderprice">
                      cash on delivery &#8377;<b>{o.price}</b>
                    </p>
                    <br />
                    <br />
                    <p className="orderdesc">{o.desc}</p>
                    <h3 className="deliverytime">
                      {"Express Delivery by" + o.delivery}
                    </h3>
                  </div>
                  <button
                    className={`pendingbuton ${
                      o.pending ? "darkcolor" : "disabled"
                    }`}
                  >
                    Pending
                  </button>
                </div>
              );
            })}
          </div>
        </Accordianpanel>
        <Accordianpanel
          id="address"
          parentid="userdet"
          title="Shipping address"
          subtitle="3 address"
        >
          <h2>Address details will be shown here</h2>
        </Accordianpanel>
      </Accordian>
    );
  }
  desktopHorizontalView() {
    return (
      <Tabs
        align="left"
        preselect={this.state.selectedTab}
        selectedTabChange={(e) => {
          this.setState({ selectedTab: e + "" });
        }}
      >
        <TabPane
          id="1"
          title="My Profile"
          subtitle="notifications, password"
          selected={this.state.selectedTab}
        >
          <div className="tabuserarea">
            <h3>My Profile</h3>
            {window.innerWidth >= 950 ? (
              <div className="tabprofilefirs">
                <InputEle type="text" placeholder="First name" />
                <InputEle type="text" placeholder="Last name" />
              </div>
            ) : (
              <div>
                <InputEle type="text" placeholder="First name" />
                <br />
                <br />
                <InputEle type="text" placeholder="Last name" />
              </div>
            )}

            <br />
            <br />
            <InputEle type="text" placeholder="Phone number" />
            <br />
            <br />
            <InputEle type="email" placeholder="Email" />
            <br />
            <br />
            <InputEle type="password" placeholder="Password" />
            <br />
            <br />
            <InputEle type="password" placeholder="Confirm Passwrod" />
            <br />
            <br />
            <div className="btncontaineruser">
              <Button
                title="SAVE CHANGES"
                size={window.innerWidth >= 950 ? "large" : "verysmal"}
                type="dark"
              />
            </div>
          </div>
        </TabPane>
        <TabPane
          id="2"
          title="My Orders"
          subtitle="Already have 12 orders"
          selected={this.state.selectedTab}
        >
          <div>
            <h6 className="ordertitle">Pending Orders</h6>
            {this.orderDetails.map((o) => {
              return (
                <div className="ordercontainer" key={o.id}>
                  <img className="orderimg" src={o.imgurl} alt="ordrimg" />
                  <span className="producticon">&gt;</span>
                  <div className="orderdesccontainer">
                    <span className="orderid">Order #{o.orderid}</span>
                    <span className="orderprice">
                      cash on delivery &#8377;<b>{o.price}</b>
                    </span>
                    <p className="orderdesc">{o.desc}</p>
                    <p className="deliverytime">
                      {"Express Delivery by" + o.delivery}
                    </p>
                  </div>
                  <button
                    className={`pendingbuton ${
                      o.pending ? "darkcolor" : "disabled"
                    }`}
                  >
                    Pending
                  </button>
                </div>
              );
            })}
          </div>
        </TabPane>
        <TabPane
          id="3"
          title="Shipping Address"
          subtitle="3 address"
          selected={this.state.selectedTab}
        >
          <h1>Shipping address will flow here</h1>
        </TabPane>
      </Tabs>
    );
  }
  render() {
    return (
      <div>
        {!this.state.isMobileDevice && !this.state.isTabletDevice ? (
          <div>{this.props.breadCrump}</div>
        ) : (
          ""
        )}
        <div className="userdetailcontainer">
          <img className="userimage" src={grish} alt="usr" />
          <p className="username">Grishk</p>
          <br />
          <br />
          <p className="useremail">grishk@gmail.com</p>
        </div>
        <div></div>
        {this.state.isMobileDevice ? (
          <this.mobileVerticalView />
        ) : (
          <this.desktopHorizontalView />
        )}
      </div>
    );
  }
}
