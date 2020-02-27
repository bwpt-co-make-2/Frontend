import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const IssueCard = props => {
  return (
    <Card>
      <CardImg top width="100%" src={props.issue.img} alt="Image of issue" />
      <CardBody>
        <CardTitle>{props.issue.title}</CardTitle>
        <CardText>{props.issue.description}</CardText>
        <Button>Upvote</Button>
      </CardBody>
    </Card>
  )
}

export default IssueCard