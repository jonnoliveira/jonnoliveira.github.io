import './Popup.css';

function Popup(props) {
  const { title, pages, url, repository, description  } = props.projectState;

  return (props.trigger) ? (
    <span className="popup-container">
      <div className="popup-contents">
        <div className="close-button-container">
          <button type="button" className='close-button' onClick={ () => { props.setTrigger(false) } }><img src="https://cdn-icons-png.flaticon.com/512/458/458595.png" alt="close button" /></button>
        </div>
        <div className="popup-contents">
          <div className="popup-heading">
            <h1>{ title }</h1>
            <p>{ description }</p>
          </div>
          {
            pages
            ? (
              <div className="popup-links-container">
                <div className="link-repository">
                  <a href={ repository } target="_blank" rel="noreferrer">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="github icon"/>
                  </a>
                </div>
                <div className="link-github-pages">
                  <a href={ url } target="_blank" rel="noreferrer">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/2449/2449158.png" alt="github-pages icon"/>
                  </a>
                </div>
              </div>
            )
            : (
              <div className="popup-links-container">
                <div className="link-repository">
                  <a href={ repository }>
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="github icon"/>
                  </a>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </span>
  ) : "";
}

export default Popup;
