import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TeamsCard = (props) => {
    const { idTeam, strGender, strTeamBadge, strTeam } = props.team
    const history = useHistory()
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* <Card style={{ width: '18rem' }}>  */}
            <Card className="shadow">
                {/* <div style={{width='50%',}}> */}
                <Card.Img variant="top" src={strTeamBadge} style={{ padding:'1em',margin: 'auto', width: '50%' }} />
                <Card.Body className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strGender}
                    </Card.Text>
                    <Button variant="primary" onClick={() => history.push(`team/${idTeam}`)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamsCard;