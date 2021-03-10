import React, { useEffect, useState } from 'react';
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
        <div className="container">
            <div className="row">
                {
                    teams.map(team => <TeamsCard team={team}></TeamsCard>)
                }
            </div>
        </div>
    );
};

export default Home;