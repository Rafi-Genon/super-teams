import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TeamDetails.css'
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
        <div className="bg-warning">
            <img src={strTeamBanner} alt="" />
            <div className="bg-img">
                <div className="team-badge">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>
            <div className="team-profile container p-3 mt-5">
                <div className="row align-items-center">
                    <div className="team-info col-lg-7 pl-5">
                        <h1>{strTeam}</h1>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>
                    <div className="team-image col-lg-5">{image}</div>
                </div>
            </div>
            <p className="container">{strDescriptionEN}</p>
            <Link to={'/home'}>kire, back home??</Link>
        </div>
    );
};

export default TeamDetails;