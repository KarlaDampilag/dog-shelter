import React, { Component } from 'react';
import PetCard from './PetCard';
import data from '../data';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export default class FeaturedPets extends Component {
  state = {
    data: ''
  }

  componentWillMount() {
    this.setState({data});
  }
  render() {
    const featuredDogs = this.state.data.filter(dog =>
      dog.featured
    );
    return(
      <div className="featured-pets-holder">
        <Row>
          {featuredDogs && featuredDogs.map(dog =>
            <Col lg={4} md={4} xs={12} key={dog.id}>
              <Link to={{
                pathname: `/dogs/${dog.name.replace(/ /g, '-')}-${dog.id}`,
                state: {
                  dog:dog
                },
                search: `?id=${dog.id}`
              }}>
                <PetCard dog={dog} />
              </Link>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}
