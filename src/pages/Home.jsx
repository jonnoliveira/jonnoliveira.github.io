import './Home.css';

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="name-container">
        <h2>Who am I?</h2>
          <div className="metamorphosis">
            <h1>Jonathas Assis de Oliveira</h1>
            <h1>Front-end web Developer</h1>
          </div>
          <div className="arrow-container">
            <div className="arrow-contents">
              <span className="arrow"></span>
              <span className="arrow"></span>
            </div>
          </div>
      </div>         
    </section>
  )
}

export default Home;
