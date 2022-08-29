import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Container className="d-flex align-items-center flex-column">
            <Row className="pt-5">
                <Col>
                    <h1 className="text-center">Welcome to the Excuse Generator!</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center pt-5">
                <Col sm>
                    <Card border="primary">
                        <Card.Body>
                            <Card.Title>5 categories</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat blandit risus nec fringilla. In porta efficitur venenatis. Integer risus massa, vehicula a pulvinar id, condimentum nec ex. Ut faucibus dignissim metus, id ornare arcu ullamcorper et. Quisque interdum mi pharetra, viverra ipsum nec, luctus orci. Aenean ultrices augue et.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card border="primary">
                        <Card.Body>
                            <Card.Title>Quick &amp; Easy</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat blandit risus nec fringilla. In porta efficitur venenatis. Integer risus massa, vehicula a pulvinar id, condimentum nec ex. Ut faucibus dignissim metus, id ornare arcu ullamcorper et. Quisque interdum mi pharetra, viverra ipsum nec, luctus orci. Aenean ultrices augue et.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card border="primary">
                        <Card.Body>
                            <Card.Title>Review &amp; Reuse</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat blandit risus nec fringilla. In porta efficitur venenatis. Integer risus massa, vehicula a pulvinar id, condimentum nec ex. Ut faucibus dignissim metus, id ornare arcu ullamcorper et. Quisque interdum mi pharetra, viverra ipsum nec, luctus orci. Aenean ultrices augue et.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col>
                    <Button variant="primary" size="lg">GENERATE EXCUSE</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;