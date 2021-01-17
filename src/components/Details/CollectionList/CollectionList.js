import React from "react";
import { 
  Container,
  Row 
} from "react-bootstrap";

const collectionList = props => {
  const mappedCollection = Object.keys(props.collection).map(key => {
    return <li>{key}: {props.collection[key]}</li>
  })

  return (
    <Container>
      <Row>
        <h3>{props.title}</h3>
      </Row>
      <Row>
        <ul style={{ listStyleType: "none" }}>
          {mappedCollection}
        </ul>
      </Row>
    </Container>
  )
}

export default collectionList