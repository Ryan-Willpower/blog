import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap'

export default () => {
    return(
        <Row>
            <Col md="4">
                 <Card>
                       <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                             <Button>Button</Button>
                       </CardBody>
                 </Card>
            </Col>
            <Col md="4">
                 <Card>
                       <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                             <Button>Button</Button>
                       </CardBody>
                 </Card>
            </Col>
            <Col md="4">
                 <Card>
                       <CardBody>
                             <CardTitle>Card title</CardTitle>
                             <CardSubtitle>Card subtitle</CardSubtitle>
                             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                             <Button>Button</Button>
                       </CardBody>
                 </Card>
            </Col>
         </Row>
    )
}
