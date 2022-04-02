import React, { useState } from 'react';
import { Container, Card, Row, Col, Form , Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './login-view.scss';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        //send a request to the server for authentication
        //then call props.onLoggedIn(username)
        props.onLoggedIn(username);
    };

    return (
        <Container>
            <Card>
                <Row>
                    <Col></Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button id="login-button" variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                            </Form>
                        </Col>
                    <Col></Col>
                </Row>
            </Card>
        </Container>
  
    );
}

LoginView.propTypes = {
    register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired
};