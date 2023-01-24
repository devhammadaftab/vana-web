import { golf } from 'endpoints';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Card from './card';
import Add from './add';
import Search from './search';

interface Props { }

const Personal: React.FC<Props> = () => {
    return (
        <Container>
            <Row>
                <Col xs={"3"}>
                    <Row>
                        <Search />
                    </Row>
                    <Row>
                        <Add />
                    </Row>
                </Col>
                <Col><Card /></Col>
            </Row>
        </Container>
    )
}

export default Personal