import React, { Component } from 'react';
import { Link as Scroll } from 'react-scroll';
import '../components/NavBar.css';

export default class NavBar extends Component {
  state = {
    active: false,
  }
  
  handleActiveButton = () => {
    const { active } = this.state;

    if (active) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  }

  render() {
    const { active } = this.state;
    return (
        <header className="header">
          <button className="hamburguer" type="button" onClick={ this.handleActiveButton }>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
          {
            active
            ? (
              <nav className="navbar-container active">
                <ul className="menu">
                  <li className="item-list">
                    <Scroll to="home" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                      Home
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="about" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                      About
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="timeline" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                      Timeline
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="portfolio" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                      Portfolio
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="contact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                      Contact
                    </Scroll>
                  </li>
                </ul>
            </nav>
            )
            : (
              <nav className="navbar-container">
                <ul className="menu">
                  <li className="item-list">
                    <Scroll to="home" spy={ true } smooth={ true } offset={ -50 } duration={ 950 }>
                      Home
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="about" spy={ true } smooth={ true } offset={ 0 } duration={ 950 }>
                      About
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="timeline" spy={ true } smooth={ true } offset={ 0 } duration={ 950 }>
                      Timeline
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="portfolio" spy={ true } smooth={ true } offset={ 0 } duration={ 950 }>
                      Portfolio
                    </Scroll>
                  </li>
                  <li className="item-list">
                    <Scroll to="contact" spy={ true } smooth={ true } offset={ 0 } duration={ 950 }>
                      Contact
                    </Scroll>
                  </li>
                </ul>
              </nav>
            )
          }
      </header>
    )
  }
}
