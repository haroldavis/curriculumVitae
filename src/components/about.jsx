import React from 'react';
import Social from './social';
import styled from 'styled-components';

const AboutStyle = styled.div`
text-align: center;
`;

const AboutAvatar = styled.div`
padding: 2em 0 0;
`;

const AboutImg = styled.img`
border-radius: 100%;
width: 180px;
border: 2px solid #6E8591;
margin: 0 auto;
display: block;
box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
text-align: center;
`;

const H2 = styled.div`
font-family: 'Roboto', sans-serif;
font-weigth: 700;
letter-spacing: 1.2 px;
font-size: 20px;
margin: .5em 0 0 0;
color: #165578;
`;

const AboutProfession = styled.div`
margin: .2em 0 1em 0;
letter-spacing: 1.6px;
font-weigth: 300;
color: #165578;
`;

const AboutBio = styled.div`
margin: .2em 0 1em 0;
letter-spacing: 1.4px;
font-weigth:300;
color: purple;
`;

const AboutLocation = styled.div`
margin: .2em 0 1em 0;
letter-spacing: 1.4px;
color: red;
`;



const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="about-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <H2>{name}</H2>
            </AboutName>
            <AboutProfession>
                <p>{profession}</p>
            </AboutProfession>
            <AboutBio>
                <p>{bio}</p>
            </AboutBio>
            <AboutLocation>
                <p>{address}</p>
            </AboutLocation>
            <div className="about-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;