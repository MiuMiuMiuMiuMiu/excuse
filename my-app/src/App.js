import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

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
      </div>
    </ThemeProvider>
  );
}

export default App;
