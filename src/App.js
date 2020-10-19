import React from "react";
import "./styles.css";
import Navigation from "./Navigation";
import desktophome from "./images/desktophome.png";
import mobilehome from "./images/mobilehome.png";
import brownman from "./images/dark-haired-man-brown.jpg";
import businessman from "./images/modern-businessman.jpg";
import neck from "./images/neck.png";
import { collection, breadcrumpmap } from "./meta/datafile";
import testimonial from "./images/vikas.png";
import { Grid, GridCol, InputEle, Button } from "./generic/generalfunctions";
import Footer from "./Footer";
import Navstories from "./Navstories";
import UserAreana from "./UserAreana";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.collectionDataSet = collection;
    this.state = {
      isTabletDevice: false,
      isMobileDevice: false,
      testimonialgrid: 3,
      showHome: true,
      breadCrump: "Home |",
      selectedTab: "1",
      showOverlay: true,
      pathinState: this.props.pathArr
    };
    this.tabMap = breadcrumpmap;
    this.styleGuidesArea = this.styleGuidesArea.bind(this);
    this.testimonialArea = this.testimonialArea.bind(this);
    this.setTestimonialTab = this.setTestimonialTab.bind(this);
    this.latestcollectionArea = this.latestcollectionArea.bind(this);
    this.updatePath = this.updatePath.bind(this);
  }
  styleGuidesArea() {
    return (
      <div className="styleguidecontainer">
        <div
          className="styleguide"
          style={{
            backgroundImage: `url("${neck}")`
          }}
        ></div>
        <div className="overlaystyleguide1">
          <h3>GET COUPONS AND STYLE GUIDES</h3>
          <h5>Subscribe to our Newsletter</h5>
          <InputEle type="text" placeholder="E-mail" />
          <span>
            <Button
              title="SUBSCRIBE"
              size={
                !this.state.isMobileDevice && !this.state.isTabletDevice
                  ? "small"
                  : "medium"
              }
              type="sec"
            />
          </span>
        </div>
        <div className="location">
          <button className="locbutton">
            <span>&#128225;</span>LOCATE US
          </button>
        </div>
      </div>
    );
  }
  testimonialArea() {
    let name = "vikas";
    let star = 5;
    let comments =
      "Love the cloth material! So breezy and comfortable.Really durable as well. I must say the jeans I bought was worth the piece.";
    return (
      <div className="testimonials" id="testimoni">
        <h2>TESTIMONIALS</h2>
        <Grid>
          {Array.from(Array(this.state.testimonialgrid), (e, i) => {
            return (
              <GridCol key={i} total={this.state.testimonialgrid}>
                <div className="testimonialContainer">
                  <img
                    className="testimonialIcon"
                    src={testimonial}
                    alt="jeans"
                  />
                  <span className="testimonialname">{name}</span>
                  <span className="starcontainer">
                    {Array.from(Array(star), (e, i) => {
                      return (
                        <span className="star" key={i}>
                          &#9733;
                        </span>
                      );
                    })}
                  </span>
                  <br />
                  <p className="comments">{comments}</p>
                </div>
              </GridCol>
            );
          })}
        </Grid>
      </div>
    );
  }
  setTestimonialTab() {
    if (!this.state.isMobileDevice && !this.state.isTabletDevice) {
      this.setState({ testimonialgrid: 3 });
    } else if (this.state.isTabletDevice && !this.state.isMobileDevice) {
      this.setState({ testimonialgrid: 2 });
    } else {
      this.setState({ testimonialgrid: 1 });
    }
  }
  latestcollectionArea() {
    return (
      <div>
        <div className="separator">LATEST COLLECTION</div>
        <div className="collectioncarousel">
          {this.collectionDataSet.map((s) => {
            return (
              <div key={s.id} className="carouselslide">
                <img src={s.imgurl} alt="denimjean" />
                <p>{s.name}</p>
                <p className="price">{s.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  updatePath(url) {
    window.history.pushState({}, undefined, url);
  }
  componentDidMount() {
    this.setState({
      isTabletDevice: window.innerWidth <= 760 && window.innerWidth > 360
    });
    this.setState({ isMobileDevice: window.innerWidth <= 360 });
    this.setTestimonialTab();
    window.onpopstate = (ev) => {
      this.setState({
        pathinState: window.location.pathname.split("/").slice(1)
      });
    };

    window.addEventListener("resize", () => {
      this.setState({ isMobileDevice: window.innerWidth <= 360 });
      this.setState({
        isTabletDevice: window.innerWidth <= 760 && window.innerWidth > 360
      });
      this.setTestimonialTab();
    });
  }
  render() {
    return (
      <div className="App">
        <Navigation
          menuclicked={(val) => {
            this.setState({ showOverlay: val });
          }}
          switchlayout={(id, url) => {
            this.setState({ selectedTab: id, breadCrump: this.tabMap[id] });
            this.setState({ showHome: !this.state.showHome });
            window.history.pushState({}, undefined, url);
            this.setState({ pathinState: url });
          }}
        />
        {(this.state.isMobileDevice || this.state.isTabletDevice) &&
        this.state.pathinState[0] === "" ? (
          <Navstories />
        ) : (
          ""
        )}
        {this.state.pathinState[0] === "" ? (
          <div>
            {this.state.isMobileDevice ? (
              <div>
                <div
                  className="mobileimgcontainer"
                  style={{
                    backgroundImage: `url("${mobilehome}")`
                  }}
                ></div>
                <div className="overlaystyleguide">
                  <span className="overlayButtons overlaytext">
                    Clothes that <span className="highlight">respire</span>
                  </span>
                  <span className="overlayButtons overlaytext">
                    for men who <span className="highlight">Aspire</span>
                  </span>
                  <span
                    className={`darkcolleredbutton browse${
                      this.state.isTabletDevice ? "tabbrowse" : ""
                    }`}
                  >
                    BROWSE COLLECTION
                  </span>
                </div>
              </div>
            ) : this.state.showOverlay ? (
              <div>
                <div
                  className="mobileimgcontainer"
                  style={{
                    backgroundImage: `url("${desktophome}")`
                  }}
                ></div>
                <div className="homeoverlaystyleguide">
                  <span className="overlayButtons overlaytext">
                    Clothes that <span className="highlight">respire</span>
                  </span>
                  <span className="overlayButtons overlaytext">
                    for men who <span className="highlight">Aspire</span>
                  </span>
                  <span
                    className={`darkcolleredbutton browse${
                      this.state.isTabletDevice ? "tabbrowse" : ""
                    }`}
                  >
                    BROWSE COLLECTION
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="secondimgcontainer"></div>
            <Grid additionalclass="">
              {/* <div className="secondimgleftrow"> */}
              <GridCol total="2" extraclass="secondimgleftrow">
                <img className="imagetwocontainer" src={brownman} alt="brown" />
                <span className="secondimgoverlayButtons">
                  <span className="highlight">Summer </span>is here and
                </span>
                <span className="secondimgoverlayButtons1">
                  So is our <span className="highlight">Collection </span>
                </span>
              </GridCol>
              <GridCol total="2">
                <Grid>
                  <GridCol col="2" total="2" extraclass="secondimgleftrow">
                    <img
                      className="imagetwocontainer"
                      src={businessman}
                      alt="busines"
                    />
                    <span className="secondimgoverlayButtons">
                      <span className="highlight">Wrinkle-free </span>t-shirts
                    </span>
                  </GridCol>
                  <GridCol col="2" total="2" extraclass="secondimgleftrow">
                    <img
                      className="imagetwocontainer businessman"
                      src={brownman}
                      alt="brown"
                    />
                    <span className="secondimgoverlayButtons">
                      <span className="highlight">Stain-free </span>denim shirts
                    </span>
                  </GridCol>
                </Grid>
              </GridCol>
            </Grid>
            <this.latestcollectionArea />
            <this.testimonialArea />
            <this.styleGuidesArea />
          </div>
        ) : (
          <UserAreana
            breadCrump={this.state.breadCrump}
            isMobileDevice={this.state.isMobileDevice}
            isTabletDevice={this.state.isTabletDevice}
            selectedTab={this.state.selectedTab}
          />
        )}
        <Footer />
      </div>
    );
  }
}
