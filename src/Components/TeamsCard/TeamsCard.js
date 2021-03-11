import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

// font awsome imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TeamsCard = (props) => {
    
    // destructuring data from object
    const { idTeam, strSport, strTeamBadge, strTeam } = props.team
    
    // useHistory hook for changeing url
    const history = useHistory()
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <Card className="shadow">
                <Card.Img variant="top" src={strTeamBadge} style={{ padding: '1em', margin: 'auto', width: '50%' }} />
                <Card.Body className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports type: {strSport}
                    </Card.Text>
                    <Button variant="primary" onClick={() => history.push(`team/${idTeam}`)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamsCard;