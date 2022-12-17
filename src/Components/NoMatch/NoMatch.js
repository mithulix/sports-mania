import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoMatch = () => {

    const NoMatchCss = {textAlign: "center",backgroundColor : "white", marginTop: "10%" };


    return (
        <div style = {NoMatchCss}>
            <h1>404</h1>
            <h4>This Page could not be loaded</h4>
            <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST,<br/> 
                HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.
            </p>
            <Link to="/home"><Button variant="primary">GO TO HOMEPAGE</Button></Link>
        </div>
    );
};

export default NoMatch;