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


      var duration = 15 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
         return Math.random() * (max - min) + min;
      }

      var interval = setInterval(function() {
         var timeLeft = animationEnd - Date.now();

         if (timeLeft <= 0) {
            return clearInterval(interval);
         }

         var particleCount = 50 * (timeLeft / duration);
         // since particles fall down, start a bit higher than random
         confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
         confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);


      return (
         <header id="home">
         {/* <ParticlesBg type="circle" bg={true} /> */}
         {/* <nav id="nav-wrap">
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
         
            {/* <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h3>{description}.</h3>
               <hr />
               <ul className="social">
                  <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
                  <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
               </ul>
               
            </div> */}
            <img className="pic" src={process.env.PUBLIC_URL + '/favePic.png'} alt="Fave_pic_cartoon" />
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      );
   }
}

export default Header;
