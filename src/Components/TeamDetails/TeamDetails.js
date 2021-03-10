import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import './TeamDetails.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faFlag, faFutbol, faCheckCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
const TeamDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const [teamDetails, setTeamDetails] = useState({})
    useEffect(() =>
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
        , [id])

    const { intFormedYear, strTeam, strCountry, strSport, strGender, strTeamBadge, strTeamBanner, strDescriptionEN, strTwitter } = teamDetails
    let image;
    if (strGender === 'Male') {
        image = <img src="/Images/male.png" alt="" />
    }
    else {
        image = <img src="/Images/female.png" alt="" />
    }
    console.log(strTwitter);
    return (
        <div className="bg-color">
            <img src={strTeamBanner} alt="" />
            <div className="bg-img">
                <div className="team-badge">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>
            <div className="team-profile container p-3 mt-5 shadow">
                <div className="row align-items-center">
                    <div className="team-info col-lg-7 pl-5">
                        <h1>{strTeam}</h1>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faCheckCircle} /> Founded: {intFormedYear}</p>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="team-image col-lg-5">{image}</div>
                </div>
            </div>
            <p className="container my-5" style={{ color:'Slate' }} >{strDescriptionEN}</p>
            <div className="d-flex justify-content-center"><Button variant="primary" onClick={() => history.push('/home')}><FontAwesomeIcon icon={faArrowLeft} />  Back To Home</Button></div>
            <div className="social-media d-flex justify-content-around" style={{}}>
                <a rel="noreferrer" href="https://twitter.com/" target="_blank"><div className="icon-style"><FontAwesomeIcon icon={faTwitterSquare} /></div></a>
                <a rel="noreferrer" href="https://www.facebook.com/" target="_blank"><div className="icon-style"><FontAwesomeIcon icon={faFacebook} /></div></a>
                <a rel="noreferrer" href="https://www.youtube.com/" target="_blank"><div className="icon-style"><FontAwesomeIcon icon={faYoutube} /></div></a>
            </div>

        </div>
    );
};

export default TeamDetails;