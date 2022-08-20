import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'New Books',
    text: 'Books kept and cared for as if they were on your own shelf, and books still on plastic, for that wonderful feeling of opening your book and fell the scent.',
  },

  {
    title: 'Trending Books',
    text: 'All the books that are making people talk, dream, create, and evolve. All this in the palm of your hand in the shortest possible time.',
  },
  
  {
    title: 'Rare Books',
    text: 'Books that people did not even know still exist, universes long lost, that book that was missing from your collection and you thought you could never have, all this very close to you.',
  },
];

const Features = () => (
  <div className="alexandria__features section__padding" id="features">
    <div className="alexandria__features-heading">
      <h1 className="gradient__text">Don't just stand there looking, buy it now, or if you work with us, go to the company's area.</h1>
      <p>Request Access or Login In</p>
    </div>
    <div className="alexandria__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;