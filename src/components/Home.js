import React from 'react';
import Search from './Search';
import FeaturedPets from './FeaturedPets';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Search />

      <h2 className="mt-4">Featured Pets</h2>
      <FeaturedPets />

      <Link to="/dogs">
        <Button variant="primary" className="full-width">View All Dogs</Button>
      </Link>
    </div>
  );
}

export default Home;
