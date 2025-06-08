import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='aboutus'>
      
      <p className='details'>
        🍣 Emphasis on uncompromising freshness and quality<br />
        🍣 Unique combinations that surprise the palate<br />
        🍣 Meticulous service experience and a warm atmosphere<br />
        Join us on a culinary journey full of pleasure and innovation – because great sushi starts with attention to detail.
      </p>

      <p>
        The history of [Store Name] begins with one simple vision – to bring the highest quality sushi to our customers, while preserving Japanese tradition and incorporating modern elements that excite every food lover.
        It all started with a deep love for Japanese cuisine and the precision that defines it. The founders of the store, with extensive experience in the gastronomy world and a passion for authentic sushi, sought to create a place where every roll tells a story, and every bite leaves a mark.
        Over the years, the store has grown and evolved, but the core values have remained the same.
      </p>

      <div>
        <video width="600" controls autoPlay muted>
          <source src="/Pictures/VideoOpening.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUs;