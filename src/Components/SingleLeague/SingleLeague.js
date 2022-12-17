import "./SingleLeague.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFlag, faFutbol, faMapMarkerAlt, faMars, faUsers, faVenus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const SingleLeague = () => {

    const { id } = useParams();
    const [formerteam, setFormerteam] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=${id}`)
            .then(res => res.json())
            .then(data => setFormerteam(data.formerteams))
    }, [id]);


    const { strSport, strPlayer, strFormerTeam, strMoveType, strTeamBadge
    } = formerteam || " ";

    //css- not in my control.
    const HeaderLogo = { width: "6rem", textAlign: "center", position: "absolute", zIndex: "1", margin: " 3% 0 0 45% " }
    const briefDetails = { backgroundColor: "#1827b3", borderRadius: ".6rem", margin: "1rem 0 -1rem 0", height: "11rem", color: "#fff" }
    const StadiumLocation = { zIndex: "2", position: "absolute", margin: " 8% 0 0 80% ", color: "#fff" };

    return (
        <div>
            {/* <div>
                <img style={HeaderLogo} src={strFilename} alt="" />
                <h5 style={StadiumLocation}>{strTime}</h5>
                <img id="HeaderImg" src={strEventAlternate} alt="stadium" />
            </div> */}
            <Container>
                <Container id="briefDetails" style={briefDetails}>
                    <Row>
                        <Col id="briefDetails_Col">
                            <h5><FontAwesomeIcon icon={faUsers} />&nbsp; {strSport}</h5>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp; Founded: {strPlayer}</p>
                            <p><FontAwesomeIcon icon={faFlag} />&nbsp; Country: {strFormerTeam}</p>
                            <p><FontAwesomeIcon icon={faFutbol} />&nbsp; Sports type: {strMoveType}</p>
                        </Col>
                        <Col>
                            <img id="briefDetails_img" src={strTeamBadge} alt="" />
                        </Col>
                    </Row>
                </Container>

                {/* description */}
                <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                </p>

                {/* social links */}
                <p id="Icons">
                    <span id="Icons_social"><Link to={`https://www.facebook.com/`}><FontAwesomeIcon icon={faFacebook} /></Link></span>
                    <span id="Icons_social"><Link to={`https://www.twitter.com/`}><FontAwesomeIcon icon={faTwitter} /></Link></span>
                    <span id="Icons_social"><Link to={`https://www.instagram.com/`}><FontAwesomeIcon icon={faInstagram} /></Link></span>
                </p>
            </Container>
        </div>
    );
};

export default SingleLeague;