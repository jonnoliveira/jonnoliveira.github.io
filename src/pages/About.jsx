import './About.css';


function About() {
  return (
    <section className="about-container" id="about">
      <div className="image-container">
        <div className="image-content">
          <img src="https://avatars.githubusercontent.com/u/86579704?v=4" alt="foto de @jonnoliveira" srcSet="https://avatars.githubusercontent.com/u/86579704?v=4" />
        </div>
      </div>
      <div className="description-about-container">
        <h1>About Me</h1>
        <p>
        My name is Jonathas Assis de Oliveira and I live in the interior of Minas Gerais, Brazil. Some of my biggest passions are technology, programming, investing and nutrition. Currently migrating from a specialization area as a Full Stack Web Development student. At the moment I have 5 months of experience and acquire the necessary skills to build great websites.
        </p>
        <div className="social-media-container">
          <div className="social-media-contents">
            <div className="social-media-icons">
              <a href="https://github.com/jonnoliveira" target="_blank" rel="noreferrer">
                <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="github icon"/>
              </a>
              <a href="https://www.linkedin.com/in/jonnoliveira/" target="_blank" rel="noreferrer">
                <img className="icon" src="https://cdn-icons-png.flaticon.com/512/142/142369.png" alt="linkedin icon"/>
              </a>
            </div>
          </div>
        </div>
        <div className="stacks">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="html5 icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css3 icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="javascript icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="node icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="reactjs" />
          <img src="https://testing-library.com/img/logo-large.png" alt="rtl icon" />
          <img src="https://www.svgrepo.com/show/303557/redux-logo.svg" alt="redux" />
        </div>
      </div>
    </section>
  )
}

export default About;
