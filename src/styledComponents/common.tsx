import styled from "styled-components";

export const StyledHeading = styled.h1`
	font-family: "Spectral", serif;
	font-size: 1.9rem;
	font-weight: 700;
	margin: 0;
	padding-bottom: 0.5em;
	color: rgba(0, 0, 0, 0.8);
`;

interface SubheadingPropsType {
	color?: string;
}

export const StyledSubheading = styled.h3<SubheadingPropsType>`
	margin: 0;
	padding-bottom: 0.5em;
	font-size: 1.4rem;
	font-family: "Spectral", serif;
	font-weight: 700;
	color: ${props => props.color || "rgba(0, 0, 0, 0.8)"};
`;

export const StyledParagraph = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	font-weight: 500;
	margin: 0;
	padding-bottom: 0.5em;
	color: rgba(0, 0, 0, 0.8);
`;

export const StyledHr = styled.hr`
	margin: 1rem 0;
	border: 0.5px inset rgba(0, 0, 0, 0.8);
`;
