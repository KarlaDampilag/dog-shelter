import React, { Component } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PetCard from './PetCard';
import Filter from './Filter';

export default class Dogs extends Component {
  state = {
    data: '',
    breed: 'Any',
    age: 'Any',
    gender: 'Any',
    size: 'Any'
  }
  componentWillMount() {
    this.setState({data});
    if (this.props.location.state !== undefined) {
      let { breed, gender, age, size } = this.props.location.state;
      this.setState({breed, gender, age, size});
    }
  }

  handleGender = (gender) => {
    this.setState({gender});
  }
  handleAge = (age) => {
    this.setState({age});
  }
  handleSize = (size) => {
    this.setState({size});
  }
  handleBreed = (breed) => {
    this.setState({breed});
  }

  render() {
    let filtered = this.state.data;

    if (this.state.gender !== "Any") {
      filtered = this.state.data.filter(dog =>
        dog.sex === this.state.gender
      );
    }

    if (this.state.age !== "Any") {
      filtered = filtered.filter(dog =>
        dog.age === this.state.age
      );
    }

    if (this.state.size !== "Any") {
      filtered = filtered.filter(dog =>
        dog.size.includes(this.state.size)
      );
    }

    if (this.state.breed !== "Any") {
      filtered = filtered.filter(dog =>
        dog.breed.includes(this.state.breed)
      );
    }

    return(
      <Row>
        <Col lg={3} md={12} xs={12}>
          <Filter
            breed={this.state.breed}
            age={this.state.age}
            gender={this.state.gender}
            size={this.state.size}
            handleGender={this.handleGender}
            handleAge={this.handleAge}
            handleSize={this.handleSize}
            handleBreed={this.handleBreed}
          />
        </Col>
        <Col lg={9} md={12} xs={12}>
          <div className="dogs-holder">
            <Row>
              {filtered.length === 0 ? <p className="warning">Your search didn't match any pet in our database.</p> :
              filtered.map(dog =>
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
        </Col>
      </Row>
    )
  }
}
