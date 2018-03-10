import React, { Component } from 'react';
import bgImage from '../../assets/images/bg-coming-soon.png';
import minusOrange from '../../assets/images/orange-minus.gif';
import minusPink from '../../assets/images/pink-minus.gif';
import plusPink from '../../assets/images/pink-plus.gif';
import plusYellow from '../../assets/images/yellow-plus.gif';
import './styles.css';

class App extends Component {
  render() {
    return (
      <figure className="main">
        <img className="bg-image" src={bgImage} alt='Techilla' />
        <img className="bg-gif minus-orange" src={minusOrange} alt='Techilla' />
        <img className="bg-gif plus-pink" src={plusPink} alt='Techilla' />
        <img className="bg-gif minus-pink" src={minusPink} alt='Techilla' />
        <img className="bg-gif plus-yellow" src={plusYellow} alt='Techilla' />
        <div className="coming-soon-text"> 
          <div className="coming-soon-heading" >COMING SOON</div>
          <div className="coming-soon-subheading">We will be celebrating the launch of our new site very soon!</div>
        </div>
      </figure>
    );
  }
}

export default App;
