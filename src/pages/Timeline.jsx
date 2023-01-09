import React, { Component } from 'react';
import timeline from '../data/TimelineObj';
import './Timeline.css';

export default class Timeline extends Component {
  render() {
    return (
      <section className="container" id="timeline">
          <div className="presentation-container">
            <div className="heading-container">
              <h1>
                This is my Timeline
              </h1>
              <p>
                It's a pleasure to meet you here. Below you can see some events that shaped me into who I'm today.
              </p>
            </div>
          </div>
        <div className="timeline-container">
          <div className="timeline">
            {
              timeline.map(({ index, title, data, description }) => {
                if (index % 2 === 0 ) {
                  return (
                    <div className="content right-content" key={ index }>
                      <div className="dot"></div>
                      <div className="text-box">
                        <h3>
                          { title }
                        </h3>
                        <small>
                          { data }
                        </small>
                        <p>
                          { description }
                        </p>
                        <span className="right-container-arrow" />
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className="content left-content" key={ index }>
                      <div className="dot"></div>
                      <div className="text-box">
                        <h3>
                          { title }
                        </h3>
                        <small>
                          { data }
                        </small>
                        <p>
                          { description }
                        </p>
                        <span className="left-container-arrow" />
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
    )
  }
}
