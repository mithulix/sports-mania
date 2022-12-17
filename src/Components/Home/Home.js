import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import AllLeague from '../AllLeague/AllLeague';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Home = () => {
    const [formerteams, setFormerteams] = useState([]);



    useEffect(() => {
        fetch( `https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=34147178`)
        .then(res => res.json())
        .then(data => setFormerteams(data.formerteams.slice(0, 15)))
        .catch((err) => console.log(err))
    }, []);


    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="justify-content-center">
                    <Col id="AllLeagueCss" md={8}>
                    {
                        formerteams.map(formerteam => (<AllLeague key={formerteam.id} formerteam={formerteam}></AllLeague>))
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;