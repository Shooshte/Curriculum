import React from "react";
import styled from "styled-components";

import {
	StyledSubheading,
	StyledParagraph,
	StyledHeading
} from "../../styledComponents/common";

import education from "../../data/education.json";

const ContentContainer = styled.div`
	margin-left: 2rem;
`;

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

			{education.map((school, i) => (
				<ContentContainer key={i}>
					<HeadingContainer>
						<StyledSubheading color="#0097E6">
							[{school.year}]
						</StyledSubheading>
						<StyledSubheading>{school.heading}</StyledSubheading>
					</HeadingContainer>
					<ParagraphContainer>
						<StyledParagraph>{school.subheading}</StyledParagraph>
					</ParagraphContainer>
				</ContentContainer>
			))}
		</React.Fragment>
	);
};

export default Education;
