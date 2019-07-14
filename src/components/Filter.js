import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { breeds, ages, genders, sizes } from '../constants.js';

export default class Filter extends Component {
  handleGender = (e) => {
    this.props.handleGender(e.target.value);
  }
  handleAge = (e) => {
    this.props.handleAge(e.target.value);
  }
  handleSize = (e) => {
    this.props.handleSize(e.target.value);
  }
  handleBreed = (e) => {
    this.props.handleBreed(e.target.value);
  }
  render() {
    return (
      <div className="filter-holder">
        <Form.Label>Breed: </Form.Label>
        <Form.Control onChange={this.handleBreed} as="select" defaultValue={this.props.breed}>
          {
            breeds.map(breed => {
              return <option>{breed}</option>
            })
          }
        </Form.Control>
        <hr/ >

        <Form.Label>Age: </Form.Label>
        <Form.Control onChange={this.handleAge} as="select" defaultValue={this.props.age}>
        {
          ages.map(age => {
            return <option>{age}</option>
          })
        }
        </Form.Control>
        <hr/ >

        <Form.Label>Gender: </Form.Label>
        <Form.Control onChange={this.handleGender} as="select" defaultValue={this.props.gender}>
        {
          genders.map(gender => {
            return <option>{gender}</option>
          })
        }
        </Form.Control>
        <hr/ >

        <Form.Label>Size (when grown): </Form.Label>
        <Form.Control onChange={this.handleSize} as="select" defaultValue={this.props.size}>
        {
          Object.entries(sizes).map(size => {
            return <option value={`${size[0]}`}>{size[1]}</option>
          })
        }
        </Form.Control>
      </div>
    )
  }
}
