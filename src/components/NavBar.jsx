import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import '../components/NavBar.css';

function NavBar() {
const [ active, setStateActive ] = useState(false);

const handleState = () => {
  if (active === true) {
    setStateActive(false);
  } else {
    setStateActive(true);
  }
}

  return (
    <header className="header">
      <button className="hamburger" type="button" onClick={ () => { handleState() } }>
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
                  home
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="about" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  about
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="timeline" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  timeline
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="portfolio" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  portfolio
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="contact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  contact
                </Scroll>
              </li>
            </ul>
        </nav>
        )
        : (
          <nav className="navbar-container">
            <ul className="menu">
              <li className="item-list">
                <Scroll to="home" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  home
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="about" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  about
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="timeline" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  timeline
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="portfolio" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  portfolio
                </Scroll>
              </li>
              <li className="item-list">
                <Scroll to="contact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
                  contact
                </Scroll>
              </li>
            </ul>
        </nav>
        )
      }
    </header>
  )
}

export default NavBar;
