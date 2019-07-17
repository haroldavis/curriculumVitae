import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/h3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="certificates">
        <H2Styled name="Certificates" />
            {props.date.map((cer, index) => (
                <div className="Certificates-item"  key={`Cer-${index}`}>
                    <H3Styled>{cer.name} </H3Styled>
                    <PStyled name={cer.description} />
                </div>
            ))}        
    </div>
);

export default Certificates;