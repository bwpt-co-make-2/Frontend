import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Badge, Button, CardFooter
} from 'reactstrap';
import { useParams } from 'react-router-dom';

const IssueView = props => {
  const upvote = () => {
    //here is where you could tell the backend to increment the issue votes
  }
  const params = useParams();
  const issue = props.issues.find(element => element.id == params.id)

  return (
    <div className='issueViewDiv'>
      <Card className='issueView'>
      <CardImg top src={issue.picture} alt="Image of issue"/>
      <CardBody>
        <CardTitle>{issue.title}</CardTitle>
        <CardText>{issue.description}</CardText>
        <Button color="primary" onClick={upvote}>
          <Badge >{issue.upvotes} </Badge> Upvotes
        </Button>
        
      </CardBody>
      <CardFooter className="text-muted">Zipcode: {issue.zipcode}</CardFooter>
    </Card>
    </div>
  )
}

export default IssueView