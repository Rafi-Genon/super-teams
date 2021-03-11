import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const BackHomeBtn = () => {
    const history = useHistory()
    return (
        <div>
            <div className="d-flex justify-content-center m-5">
                <Button variant="primary" onClick={() => history.push('/home')}><FontAwesomeIcon icon={faArrowLeft} /> 
                Back To Home</Button>
            </div>
        </div>
    );
};

export default BackHomeBtn;