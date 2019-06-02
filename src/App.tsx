import React from "react";
import styled from "styled-components";

import metadata from "./data/metadata.json";

import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";

import { StyledHr } from "./styledComponents/common";

const StyledContainer = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	padding: 1rem;
	@media screen and (min-width: 768px) {
		padding: 1rem 53px;
	}
`;

const DateParagraph = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	font-weight: 500;
	margin: 0;
	margin-bottom: 0.5rem;
	text-align: right;
	padding-right: 1rem;
	padding-top: 1rem;
`;

const App: React.FC = () => {
	return (
		<StyledContainer>
			<DateParagraph>{metadata.publishDate}</DateParagraph>
			<StyledHr />
			<PersonalInfo />
			<StyledHr />
			<Education />
		</StyledContainer>
	);
};

export default App;
