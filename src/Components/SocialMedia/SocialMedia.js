import React from 'react';import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = (props) => {
    const { strTwitter, strYoutube, strFacebook } = props.teamDetails
    return (
        <div>

            <div className="social-media d-flex justify-content-around" style={{}}>
                <a rel="noreferrer" href={`https://${strTwitter}`} target="_blank"><div className="icon-style" style={{ color: 'rgb(29, 161, 242)' }}><FontAwesomeIcon icon={faTwitter} /></div></a>
                <a rel="noreferrer" href={`https://${strFacebook}`} target="_blank"><div className="icon-style" style={{ color: 'rgb(59, 89, 152)' }}><FontAwesomeIcon icon={faFacebook} /></div></a>
                <a rel="noreferrer" href={`https://${strYoutube}`} target="_blank"><div className="icon-style" style={{ color: 'rgb(255, 0, 0)' }}><FontAwesomeIcon icon={faYoutube} /></div></a>
            </div>

        </div>
    );
};

export default SocialMedia;