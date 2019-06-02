import React from "react";
import styled from "styled-components";

import {
	StyledSubheading,
	StyledParagraph,
	StyledHeading
} from "../../styledComponents/common";

const HeadingContainer = styled.div`
	display: flex;
	h3 {
		margin-right: 0.5em;
	}
`;

const ParagraphContainer = styled.div`
	margin-left: 1rem;
`;

const Education: React.FC = () => {
	return (
		<React.Fragment>
			<StyledHeading>Education</StyledHeading>
			<HeadingContainer>
				<StyledSubheading color="#0097E6">[2010]</StyledSubheading>
				<StyledSubheading>Gimnazijski Maturant</StyledSubheading>
			</HeadingContainer>
			<ParagraphContainer>
				<StyledParagraph>
					Gimnazija Ledina, Ljubljana, Slovenija
				</StyledParagraph>
			</ParagraphContainer>
		</React.Fragment>
	);
};

export default Education;
