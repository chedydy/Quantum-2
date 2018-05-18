import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
import { AboutContentDetails } from "../Common";
import aboutImg from "../../img/Aboutus.png";
import "./AboutContent.css";

class AboutContent extends Component {
  // state = {   visible: false };
  state = {
    display: false,
    selected: {
      authors: {
        name: "",
        about: ``
      }
    },
    model: {
      aboutText: "",
      authors: [
        {
          name: "Victor Jivanescu",
          about: `My undergraduate years at Oxford studying philosophy, politics and economics, coupled with my work in strategy consulting in London have thought me much about the structure of the world we are living in and provided me a clear career and life path…. or so I thought. 
          \n\rAfter having a number of revealing experiences I learned that there is much more to our world than structure and material development. Thus, I came in touch with the world great contemplative traditions and started to undergo rigorous practice by embarking on a journey in Nepal and the Himalayas.
          \n\rAll these expriences led me on a mission to share the amazing insights I discovered with the rest of humanity. If we are to truly develop our world, we need to take in to account both our inner and outer growth and have wise answers to our questions of ultimate concern. 
        `
        },
        {
          name: "Nutas Vancea Pop Andrei",
          about: `Since the moment I started school I was highly disappointed at all that the system had to offer because of the lack of a unified transdisciplinary understanding of reality. For many years I chose, as I drowned in a nihilistic state, to give up on the world, to consider it inherently defect, inherently lost, inherently meaningless and to concentrate on hedonistic enjoyment. However, it didn’t matter the number of times I skydived, the number of girls I slept with, or the parties I went to… these didn’t solve anything. They only made it worse leading me into depression.  
          \n\rAfter a transcendental experience in which I reached the non-dual state, I knew that there was only one way out of this, and I decided that instead of continuing to let myself be drowned by the nonsense that surrounded me, I would take upon myself the responsibility of improving all that which is malignant in the world. As I’m aware that this can’t be done alone, I decided that I had to create a platform that can educate and empower people to realize their highest vision so that they may free themselves from the clutches of hedonism, nihilism and ideology that permeate our world. My hope is that if we work together, directing our energy towards the establishment of the transcendental, we will be able to create heaven on earth. 
          `
        },
        {
          name: "Todor Ramona",
          about: `Growing up in this world surrounded by constant change and information, I only knew what I did not want to do with my life (or so I thought), so I decided to study electrical engineering, since in from my high school point of view that was a field which I would find difficult to understand without academic support. After two years of almost pure theoretical physics and math, I reached the conclusion that I am able to understand and structure anything I want through a rational perspective. Contrary to my expectations, this point in my life didn’t lead me to fulfillment or peace, but instead I embarked on a path surrounded by predictability and meaninglessness, since I did not see any deep meaning to what I could do or what the system and society had to offer.
          \n\rOn this path, which led me from bad to worse, I hit a rock bottom of depression, from which nothing seemed less likely than a way out. But soon enough, through an active, dedicated effort to change this, I found myself engaged in extraordinary self-transcending experiences, through which I learned, by having the courage to take many leaps of faith at the end of my comfort zone, that I can’t keep being unsatisfied by society, that the rational perspective is not the ultimate one, that I have to actually be the change that I want to see in the world, and that I’ve once been at the “lower” stages during my evolution, stages which I had previously criticized and disidentified myself with. I realized the non-dual (or more precisely, trans-dual) nature of reality. I came to understand the wisdom of the great contemplative traditions of the world, I understood that this wisdom is timeless, and that there is a way to apply it even in this insane and rushed modern world of ours. I dedicate myself to a mission of developing reality towards its highest potential.
          `
        },
        {
          name: "Panta Diana Maria",
          about: `My undergraduate years at Oxford studying philosophy, politics and economics, coupled with my work in strategy consulting in London have thought me much about the structure of the world we are living in and provided me a clear career and life path…. or so I thought. 
        After having a number of revealing experiences I learned that there is much more to our world than structure and material development. Thus, I came in touch with the world great contemplative traditions and started to undergo rigorous practice by embarking on a journey in Nepal and the Himalayas. All these expriences led me on a mission to share the amazing insights I discovered with the rest of humanity. If we are to truly develop our world, we need to take in to account both our inner and outer growth and have wise answers to our questions of ultimate concern. 
          `
        }
      ]
    }
  };
  onShow(index) {
    this.setState({
      display: !this.state.display,
      selected: this.state.model.authors[index]
    });
  }

  render() {
    const { about } = this.props;
    return (
      <div className="myheader">
        <PageHeader image={aboutImg} title={""}>
          {/* {about.title} */}
        </PageHeader>

        <Container>
          <AboutContentDetails
            title="About Me"
            appElement="#root"
            isOpen={this.state.display}
            name={this.state.selected.name}
            image={about.imageUrl}
            close={() => {
              this.setState({ display: false });
            }}
          >
            <p className="text-style">{this.state.selected.about}</p>
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
                <a onClick={this.onShow.bind(this, 0)} className="modal-design">
                  Show More
                </a>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">{this.state.model.authors[1].name}</div>
                <a onClick={this.onShow.bind(this, 1)} className="modal-design">
                  Show More
                </a>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay-reverse">
                <div className="text">{this.state.model.authors[2].name}</div>
                <a onClick={this.onShow.bind(this, 2)} className="modal-design">
                  Show More
                </a>
              </div>
            </div>
            <br />
            <div className="container-avatar">
              <img src={about.imageUrl} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">{this.state.model.authors[3].name}</div>
                <a onClick={this.onShow.bind(this, 3)} className="modal-design">
                  Show More
                </a>
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
