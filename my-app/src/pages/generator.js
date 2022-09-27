import CallExcuse from '../components/callExcuse.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const Generator = () => {
    return (
        <Container className="pt-5 col-4 display-6">
            <h1 className="text-center pb-4">Categories</h1>
            <ListGroup className="text-center gap-1" variant="flush">
                <ListGroup.Item className="category-hover" onClick={() => CallExcuse("family")}>Family</ListGroup.Item>
                <ListGroup.Item className="category-hover" onClick={() => CallExcuse("office")}>Office</ListGroup.Item>
                <ListGroup.Item className="category-hover" onClick={() => CallExcuse("children")}>Children</ListGroup.Item>
                <ListGroup.Item className="category-hover" onClick={() => CallExcuse("collage")}>Collage</ListGroup.Item>
                <ListGroup.Item className="category-hover" onClick={() => CallExcuse("party")}>Party</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Generator;