import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

      if(this.props.data){
         var project = this.props.data.project;
         var github = this.props.data.github;
         var name = this.props.data.name;
         var description= this.props.data.description;
         var city= this.props.data.address.city;
         var networks= this.props.data.social.map(function(network){
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">
         {/* <ParticlesBg type="circle" bg={true} />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav> */}

            <div className="row banner">
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
                  
                  <img id="favePic" className="pic" src={process.env.PUBLIC_URL + '/images/fave-pic.png'} alt="Fave_pic_cartoon" />
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
