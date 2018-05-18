import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
import { AboutContentDetails } from "../Common";

// import CoverImg from "../../img/coverpic.png";
// import contact1 from "../../img/blue_space_nebula.jpg";
import "./AboutContent.css";
// import "./AboutContent.scss";
// import "./Grid.scss"

class AboutContent extends Component {
  // state = {   visible: false };
  state = {
    display: false,
    selected: {
      name: "Victor Jivanescu",
      about: `My undergraduate years at Oxford studying philosophy, politics and economics, coupled with my work in strategy consulting in London have thought me much about the structure of the world we are living in and provided me a clear career and life path…. or so I thought. 
      After having a number of revealing experiences I learned that there is much more to our world than structure and material development. Thus, I came in touch with the world great contemplative traditions and started to undergo rigorous practice by embarking on a journey in Nepal and the Himalayas. All these expriences led me on a mission to share the amazing insights I discovered with the rest of humanity. If we are to truly develop our world, we need to take in to account both our inner and outer growth and have wise answers to our questions of ultimate concern. 
      `
    },
    model: {
      aboutText: "",
      authors: [
        {
          name: "Victor Jivanescu",
          about: "This is Victor. He is shaorma cu detatoate."
        },
        {
          name: "Nutas Vancea Pop Andrei",
          about: "This is Nutas. He is a mantra cover maker."
        },
        { name: "Todor Ramona", about: "This is Ramona. She is lupitz." },
        {
          name: "Panta Diana Maria",
          about: "This is Diana. She is in wonderland"
        }
      ]
    }
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
          <AboutContentDetails
            title="About Me"
            appElement="#root"
            className="fa fa-eye fa-3x preview-button margin modal-design"
            isOpen={this.state.display}
            name={this.state.selected.name}
            close={() => {
              this.setState({ display: false });
            }}
          >
            {this.state.selected.about}
          </AboutContentDetails>
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
              <div className="overlay-reverse">
                <div className="text">{this.state.model.authors[0].name}</div>
                <a onClick={this.onShow.bind(this)}>Show More</a>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">{this.state.model.authors[1].name}</div>
                <a onClick={this.onShow.bind(this)}>Show More</a>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay-reverse">
                <div className="text">{this.state.model.authors[2].name}</div>
                <a onClick={this.onShow.bind(this)}>Show More</a>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">{this.state.model.authors[3].name}</div>
                <a onClick={this.onShow.bind(this)}>Show More</a>
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
