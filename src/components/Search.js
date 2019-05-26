import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  handleSearch = (e) => {
    e.preventDefault();
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
            </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Sex</Form.Label>
            <Form.Control as="select" id="search-gender">
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control as="select" id="search-age">
                <option>Any</option>
                <option>Puppy</option>
                <option>Young</option>
                <option>Adult</option>
                <option>Senior</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Size (when grown)</Form.Label>
              <Form.Control as="select" id="search-size">
              <option>Any</option>
              <option value="Small">Small (11 kg or less)</option>
              <option value="Medium">Medium (12-27 kg)</option>
              <option value="Large">Large (28-45 kg)</option>
              <option value="Extra large">Extra large (46kg or more)</option>
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
