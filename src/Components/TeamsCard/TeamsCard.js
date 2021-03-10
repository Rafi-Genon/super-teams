import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

const TeamsCard = (props) => {
    const { idTeam, strGender, strTeamBadge, strTeam } = props.team
    const history = useHistory()
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            {/* <Card style={{ width: '18rem' }}>  */}
            <Card>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strGender}
                    </Card.Text>
                    <Button variant="primary" onClick={() => history.push(`team/${idTeam}`)}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamsCard;