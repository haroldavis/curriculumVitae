import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/h3Styled';
import PStyled from '../styled/PStyled';

const Education = props => (
    <div className="education">
        <H2Styled name="Education" />
            {props.date.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <H3Styled>{edu.degree} @ {edu.institution}
                        <span>{edu.starDate} - {edu.endDate}</span>
                    </H3Styled>
                    <PStyled name={edu.description} />
                </div>
            ))}        
    </div>
);

export default Education;