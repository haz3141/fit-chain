import React from 'react';

import './About_test.css';

import backImage from '../images/bikebridge.jpeg';

function About() {
  return (
    <React.Fragment>
      <header className="v-header container">
        <div className="fullscreen-video-wrap image">
          
        </div>

        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Hello Everyone</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            dolores itaque. Officia dicta, voluptate aliquid temporibus fuga
            similique quidem tenetur.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </header>

      <section className="section section-a">
        <div className="container">
          <h1>Section A</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            harum rerum ducimus nostrum obcaecati accusamus, dolores veniam
            impedit facere temporibus suscipit. Perspiciatis similique pariatur
            aut cum atque eos repudiandae sapiente dolore consequuntur non
            labore qui distinctio, ab debitis provident optio dignissimos
            doloribus? Sed quod perspiciatis, sit quo voluptas id delectus?
          </p>
        </div>
      </section>

      <section className="section section-b">
        <div className="container">
          <h1>Section B</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            harum rerum ducimus nostrum obcaecati accusamus, dolores veniam
            impedit facere temporibus suscipit. Perspiciatis similique pariatur
            aut cum atque eos repudiandae sapiente dolore consequuntur non
            labore qui distinctio, ab debitis provident optio dignissimos
            doloribus? Sed quod perspiciatis, sit quo voluptas id delectus?
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
