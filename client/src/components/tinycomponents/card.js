import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cardz = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
  <CardTitle>{props.title}</CardTitle>
  <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button color="primary">Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardz;