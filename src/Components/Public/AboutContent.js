import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
// import CoverImg from "../../img/coverpic.png";
// import contact1 from "../../img/blue_space_nebula.jpg";
import "./AboutContent.css";
// import "./AboutContent.scss";
// import "./Grid.scss"

class AboutContent extends Component {
  // state = {   visible: false };
  state = {
    display: false
  };
  onShow() {
    this.setState({ display: !this.state.display });
  }
  render() {
    const { about } = this.props;
    return (
      <div className="myheader">
        <PageHeader image={about.imageUrl} title={"About Me"}>
          {about.title}
        </PageHeader>

        <Container>
          <div
            style={{
              textAlign: "justify"
            }}
          >
            <ReactMarkdown source={about.content} />{" "}
          </div>
          <div className="wrap-contacts">
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      /* <div className="row">
                    <div className="col-1-of-3">
                       <div className="card">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>7 day tours</li>
                                        <li>Up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: medium</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$497</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>5 day tours</li>
                                        <li>Up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$897</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div> }*/
    );
  }
}

export { AboutContent };
