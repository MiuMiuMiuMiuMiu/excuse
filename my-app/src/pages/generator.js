import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const Generator = () => {
    return (
        <Container className="col-4">
            <ListGroup className="text-center" variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Generator;