import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
color: #212121;
font-weight: 400;
margin: .8em 0; 
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>

export default H3Styled;