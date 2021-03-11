import React, { useEffect, useState } from 'react';
import './Home.css'
import TeamsCard from '../TeamsCard/TeamsCard';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() =>
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
        , [])
    console.log(teams)
    return (
        <div className="bg-color">
            <div className="bg-img d-flex align-items-center justify-content-center">
                <h1 id="lead-title">Super Teams</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        teams.map(team => <TeamsCard team={team} key={team.idTeam}></TeamsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;