import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import data from '../data';

export default class Dog extends Component {
  state = {
    data: ''
  }
  componentWillMount() {
    this.setState({data});
  }

  render() {
    var name = img = sex = age = breed = color = size = info = story = "";
    if (this.props.location.state != null) {
      var {name, img, sex, age, breed, color, size, info, story} = this.props.location.state.dog;
    } else {
      const dogs = this.state.data;
      const query = new URLSearchParams(this.props.location.search);
      const pageID = query.get('id');
      let chosenOne = dogs.filter(dog =>
        dog.id == pageID
      );
      chosenOne = chosenOne[0];
      name = chosenOne.name;
      img = chosenOne.img;
      sex = chosenOne.sex;
      age = chosenOne.age;
      breed = chosenOne.breed;
      color = chosenOne.color;
      size = chosenOne.size;
      info = chosenOne.info;
      story = chosenOne.story;
    }

    return(
      <div className="single-dog-container">
        <h2>My name is {name}!</h2>
        <Row className="album-div">
          {img.map(item =>
            <Col xs={4}>
            <div className="img-holder"><img src={item} alt="dog profile" /></div>
            </Col>
          )}
        </Row>
        <Row className="mt-4">
          <Col md={6} xs={12}>
            <Card className="mb-2">
              <h3>Facts About Me</h3>
              <div className="dog-facts">
                <Row>
                  <Col xs={3}><label>Breed: </label></Col>
                  <Col>{breed}</Col>
                </Row>
                <Row>
                  <Col xs={3}><label>Color: </label></Col>
                  <Col>{color}</Col>
                </Row>
                <Row>
                  <Col xs={3}><label>Age: </label></Col>
                  <Col>{age}</Col>
                </Row>
                <Row>
                  <Col xs={3}><label>Size: </label></Col>
                  <Col>{size}</Col>
                </Row>
                <Row>
                  <Col xs={3}><label>Sex: </label></Col>
                  <Col>{sex}</Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card>
              <h3>My Info</h3>
              <ul>
                {info.map(item =>
                  item.includes("Not") ? <li className="red">{item}</li> : <li className="green">{item}</li>
                )}
              </ul>
            </Card>
          </Col>
        </Row>
        <h3 className="mt-4">My Story</h3>
        <p>{story}</p>

      </div>
    )
  }
}
