import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const Generator = () => {
    return (
        <Container className="pt-5 col-4 display-6">
            <h1 className="text-center pb-4">I need an excuse for...</h1>
            <ListGroup className="text-center gap-1" variant="flush">
                <ListGroup.Item>Family</ListGroup.Item>
                <ListGroup.Item>Office</ListGroup.Item>
                <ListGroup.Item>Children</ListGroup.Item>
                <ListGroup.Item>Collage</ListGroup.Item>
                <ListGroup.Item>Party</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Generator;