import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Excuse me...</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Generator</Nav.Link>
                <Nav.Link href="#link">Folder</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Welcome to the Excuse Generator!</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm>
              <Card border="primary">
                <Card.Body>
                  <Card.Title>5 categories</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border="primary">
                <Card.Body>
                  <Card.Title>Quick &amp; Easy</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border="primary">
                <Card.Body>
                  <Card.Title>Review &amp; Reuse</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
