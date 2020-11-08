import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Banner from "./Banner.js";

class Header extends Component {
  render() {

      return (
         <header id="home" className="container">
            <div className="d-flex flex-column banner">
               <Banner />
               <div className="">
                  <div className="cake-cover">
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
                  <div className="message">
                     <div className="col-md-12">
                        <p>Today is...</p>
                        <p>a special day,</p>
                        <p>my babu's birthday.</p>
                        <p>So that's why</p>
                        <p>I made this...</p>
                        <p>as a birthday present to you.</p>
                        <p>Thanks for being there</p>
                        <p>Thanks for the bond we made</p>
                        <p>Thanks for everything</p>
                        <p>I wish you all the best</p>
                        <p>May your life be at ease</p>
                        <p>May all your wishes come true</p>
                        <p>Remember</p>
                        <p>your ambitions</p>
                        <p>yes, it is a tough journey</p>
                        <p>but...</p>
                        <p>don't worry</p>
                        <p>because...</p>
                        <p>you are strong</p>
                        <p>smart</p>
                        <p>beautiful</p>
                        <p>amazing</p>
                        <p>and cute, the cutest.</p>
                        <p>This year will be better</p>
                        <p>and I hope</p>
                        <p>you'll find...</p>
                        <p>happiness along the way,</p>
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
               {/* <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a> */}
            </p>

         </header>
      );
   }
}

export default Header;
