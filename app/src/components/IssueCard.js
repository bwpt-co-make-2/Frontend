import React from 'react';
import { Link } from 'react-router-dom'
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
      <Link to={`/issues/${props.issue.id}`}>
        <CardImg top width="100%" src={props.issue.picture} alt="Image of issue" />
      </Link>
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