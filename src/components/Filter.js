import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

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
          <option>Any</option>
          <option>Anatolian Shepherd</option>
          <option>Basenji</option>
          <option>Beagle</option>
          <option>Chihuahua</option>
          <option>Cocker Spaniel</option>
          <option>Golden Retriever</option>
          <option>Great Dane</option>
          <option>Husky</option>
          <option>Labrador Retriever</option>
          <option>Maltese</option>
          <option>Pomeranian</option>
          <option>Poodle</option>
          <option>Shepherd</option>
          <option>Schnauzer</option>
          <option>Shih Tzu</option>
          <option>Spaniel</option>
          <option>Terrier</option>
        </Form.Control>
        <hr/ >

        <Form.Label>Age: </Form.Label>
        <Form.Control onChange={this.handleAge} as="select" defaultValue={this.props.age}>
          <option>Any</option>
          <option>Puppy</option>
          <option>Young</option>
          <option>Adult</option>
          <option>Senior</option>
        </Form.Control>
        <hr/ >

        <Form.Label>Gender: </Form.Label>
        <Form.Control onChange={this.handleGender} as="select" defaultValue={this.props.gender}>
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
        <hr/ >

        <Form.Label>Size (when grown): </Form.Label>
        <Form.Control onChange={this.handleSize} as="select" defaultValue={this.props.size}>
          <option>Any</option>
          <option value="Small">Small (11 kg or less)</option>
          <option value="Medium">Medium (12-27 kg)</option>
          <option value="Large">Large (28-45 kg)</option>
          <option value="Extra large">Extra large (46kg or more)</option>
        </Form.Control>
      </div>
    )
  }
}
