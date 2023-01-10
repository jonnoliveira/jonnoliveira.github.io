import { useState } from 'react';
import projects from '../data/ProjectsObj';
import breakPoints from '../data/Breakpoints';
import Carousel from 'react-elastic-carousel';
import Popup from '../components/Popup';
import './Portfolio.css';


function Portfolio() {

  const [ openPopup, setOpenPopup ] = useState(false);
  const [ projectState, setProjectState ] = useState({});

  const setObjPopup = (project) => {
    setProjectState(project);
    setOpenPopup(true);
  }

  return (
    <section className="portfolio-container" id="portfolio">
      <div className="description-portfolio-container">
        <div className="description-portfolio">
          <h1>Portfolio</h1>
          <p>This is my portfolio. Here you'll find my personal and academic projects.</p>
        </div>
      </div>
        <div className="projects-container">
          <Carousel breakPoints={ breakPoints } >
            {
              projects.map(({ index, src, alt, title, pages, url, repository, description }) => (
                <div className="card" key={index}>
                  <div className="card-content" >
                    <img src={ src } alt={ alt } />
                    <h3>{ title }</h3>
                    <div className="button-content">
                      <button type="button" onClick={ () => { setObjPopup({ title, pages, url, repository, description }) } }>
                        SEE MORE
                      </button>
                    </div>
                  </div>
                </div>           
              ))  
            }
          </Carousel>
        </div>
        <Popup trigger={ openPopup  } setTrigger={ setOpenPopup } projectState={ projectState }/>
    </section>
  )
}

export default Portfolio;
