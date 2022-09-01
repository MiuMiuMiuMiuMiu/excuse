import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const Generator = () => {
    return (
        <Container className="pt-5 col-4 display-6">
            <h1 className="text-center pb-4">Categories</h1>
            <ListGroup className="text-center gap-1" variant="flush">
                <ListGroup.Item className="category-hover">Family</ListGroup.Item>
                <ListGroup.Item className="category-hover">Office</ListGroup.Item>
                <ListGroup.Item className="category-hover">Children</ListGroup.Item>
                <ListGroup.Item className="category-hover">Collage</ListGroup.Item>
                <ListGroup.Item className="category-hover">Party</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Generator;