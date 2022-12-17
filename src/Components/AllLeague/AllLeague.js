import "./AllLeague.css";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AllLeague = (props) => {
    const {id, strSport, strFormerTeam, strTeamBadge} = props.formerteam;

    return (
        <div>
            <Container>
                <Row>
                    <Col id="CardsCol">
                        <Card id="cards">
                            <Card.Img id="CardImg" variant="top" src={strTeamBadge} alt="Image not found / Api changed to *Patreon*"/>
                            <Card.Body>
                            <Card.Title>{strFormerTeam}</Card.Title>
                            <Card.Text id="cText">Sports type: {strSport}</Card.Text>
                            <Link to={`/SingleLeague/${id}`}> <Button variant="primary">
                                Explore<FontAwesomeIcon id="icon" icon={faArrowRight} /></Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default AllLeague;