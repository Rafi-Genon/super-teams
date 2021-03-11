import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetails.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faFlag, faFutbol, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import SocialMedia from '../SocialMedia/SocialMedia';
import BackHomeBtn from '../BackHomeBtn/BackHomeBtn';

const TeamDetails = () => {
    const { id } = useParams()
    const [teamDetails, setTeamDetails] = useState({})
    useEffect(() =>
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
        , [id])
    const { intFormedYear, strTeam, strCountry, strSport, strGender, strTeamBadge, strTeamBanner, strDescriptionEN } = teamDetails
    let image;
    if (strGender === 'Male') {
        image = <img src="/Images/male.png" alt="" />
    }
    else {
        image = <img src="/Images/female.png" alt="" />
    }

    return (
        <div className="bg-color">
            <img src={strTeamBanner} alt="" />
            <div className="bg-img">
                <div className="team-badge">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>

            <div className="team-profile container p-3 mt-5 shadow ">
                <div className="row align-items-center">
                    <div className="team-info col-lg-7 col-sm-12 col-md-6 pl-5">
                        <h1>{strTeam}</h1>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faCheckCircle} /> Founded: {intFormedYear}</p>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="team-image col-lg-5 col-md-6 col-sm-12">{image}</div>
                </div>
            </div>

            <p className="container my-5 team-description" >{strDescriptionEN}</p>
            <BackHomeBtn></BackHomeBtn>
            <SocialMedia teamDetails={teamDetails}></SocialMedia>
        </div>
    );
};

export default TeamDetails;