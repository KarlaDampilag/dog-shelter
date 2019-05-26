import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class PetCard extends Component {
  render() {
    const { name, img, sex, age } = this.props.dog;
    return(
      <Card bg="light">
        <div className="featured-img-holder">
          <img className="card-img-top" src={img[0]} alt="featured dog" />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{sex}, {age}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }
}
