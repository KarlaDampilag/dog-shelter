import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { breeds, ages, genders, sizes } from '../constants.js';

class Search extends Component {
  handleSearch = (e) => {
    e.preventDefault();

    // TODO change this into declarative
    let breed = document.querySelector('#search-breed').value;
    let gender = document.querySelector('#search-gender').value;
    let age = document.querySelector('#search-age').value;
    let size = document.querySelector('#search-size').value;

    this.props.history.push({
      pathname: "/dogs",
      state: {
        breed, gender, age, size
      }
    });
  }

  render() {
    return(
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" id="search-breed">
              {
                breeds.map(breed => {
                  return <option>{breed}</option>
                })
              }
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" id="search-gender">
            {
              genders.map(gender => {
                return <option>{gender}</option>
              })
            }
            </Form.Control>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control as="select" id="search-age">
              {
                ages.map(age => {
                  return <option>{age}</option>
                })
              }
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Size (when grown)</Form.Label>
              <Form.Control as="select" id="search-size">
              {
                Object.entries(sizes).map(size => {
                  return <option value={`${size[0]}`}>{size[1]}</option>
                })
              }
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button onClick={this.handleSearch} variant="primary" type="submit" className="full-width">
          Search
        </Button>
      </Form>
    )
  }
}
export default withRouter(Search);
