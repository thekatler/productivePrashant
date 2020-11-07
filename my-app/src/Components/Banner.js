import React, { Component } from 'react';

class Banner extends Component {
  render() {

    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/images/banner.png'} className="bannar" />
        </div>
    );
  }
}

export default Banner;
