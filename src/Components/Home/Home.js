import React, { useEffect, useState } from 'react';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() =>
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        , [])
    return (
        <div>

        </div>
    );
};

export default Home;