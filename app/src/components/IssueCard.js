import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Badge, Button, CardFooter
} from 'reactstrap';

const IssueCard = props => {
  const upvote = () => {
    //here is where you could tell the backend to increment the issue votes
  }

  return (
    <Card>
      <CardImg top width="100%" src={props.issue.img} alt="Image of issue" />
      <CardBody>
        <CardTitle>{props.issue.title}</CardTitle>
        <CardText>{props.issue.description}</CardText>
        <Button color="primary" onClick={upvote}>
          <Badge >{props.issue.upvotes} </Badge> Upvotes
        </Button>
        
      </CardBody>
      <CardFooter className="text-muted">Zipcode: {props.issue.zipcode}</CardFooter>
    </Card>
  )
}

export default IssueCard