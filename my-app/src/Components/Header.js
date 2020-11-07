import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Banner from "./Banner.js";

class Header extends Component {
  render() {

      return (
         <header id="home">
            
            <div className="row banner">
               <Banner />
               <div className="banner-text">
                  <div className="row cake-cover">
                     <div className="col-md-12 text-center">
                        <div className="cake">
                        <div className="velas">
                           <div className="fuego"></div>
                           <div className="fuego"></div>
                           <div className="fuego"></div>
                           <div className="fuego"></div>
                           <div className="fuego"></div>
                        </div>
                        <div className="cobertura"></div>
                        <div className="bizcocho"></div>
                        </div>
                     </div>
                  </div>
                  <div className="row message">
                     <div className="col-md-12">
                        <p>Today is...</p>
                        <p>as beautiful as other days</p>
                        <p>but you realize</p>
                        <p>another year has gone</p>
                        <p>in a blink of the eyes</p>
                        <p><strong>however</strong></p>
                        <p>Do you know..?</p>
                        <p>today is just special</p>
                        <p>so special to you</p>
                        <p>that's why</p>
                        <p>Let's make it...</p>
                        <p>the best celebration ever</p>
                        <p>and let me share...</p>
                        <p>a piece of happiness to you</p>
                        <p>I made all this...</p>
                        <p>as a birthday present to you</p>
                        <p>thanks for being there</p>
                        <p>thanks for the friendship we made</p>
                        <p>thanks for everything</p>
                        <p>I wish you all the best</p>
                        <p>May your life be at ease</p>
                        <p>May all your wishes come true</p>
                        <p>Remember</p>
                        <p>your ambitions</p>
                        <p>you live as a free bird...</p>
                        <p>flying in the blue sky</p>
                        <p>Now things are different...</p>
                        <p>real story of your life</p>
                        <p>is just about to begin</p>
                        <p>indeed..</p>
                        <p>but...</p>
                        <p>don't worry</p>
                        <p>because...</p>
                        <p>God has your back</p>
                        <p>and</p>
                        <p>this year will be better</p>
                        <p>and I hope</p>
                        <p>you'll find...</p>
                        <p>happiness along the way</p>
                        <p>keep your spirit up</p>
                        <p>enjoy every single moment...</p>
                        <p>that you experience today</p>
                        <p>fill it with your most beautiful smile</p>
                        <p>and make it the best memory..</p>
                        <p>lastly...</p>
                        <p>I'd like to wish you one more time</p>
                        <p>a very happy birthday, babu</p>
                     </div>
                  </div>
                  <img id="favePic" className="pic mt-0" src={process.env.PUBLIC_URL + '/images/fave-pic.png'} alt="Fave_pic_cartoon" style={{objectFit:'contain'}} />
               </div>
            </div>
            
            <p className="scrolldown">
               <a id="blow" href="#">Blow</a>
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
