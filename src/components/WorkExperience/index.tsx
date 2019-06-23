import React from "react";
import styled from "styled-components";

import {
	StyledSubheading,
	StyledParagraph,
	StyledHeading
} from "../../styledComponents/common";

import workExperience from "../../data/workExperience.json";

const ContentContainer = styled.div`
	margin-left: 2rem;
`;

const HeadingContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 0.5em;
	h3 {
		margin-right: 0.5em;
		padding-bottom: 0;
	}
`;

const ParagraphContainer = styled.div`
	margin-left: 1rem;
	padding-bottom: 1em;
`;

const WorkExperience: React.FC = () => (
	<React.Fragment>
		<StyledHeading>Work experience</StyledHeading>

		{workExperience.map((job, i) => (
			<ContentContainer key={i}>
				<HeadingContainer>
					<StyledSubheading color="#0097E6">
						{`[${job.startDate} - ${job.endDate}]`}
					</StyledSubheading>
					<StyledSubheading>{job.title}</StyledSubheading>
				</HeadingContainer>
				<ParagraphContainer>
					<StyledParagraph>{job.text}</StyledParagraph>
				</ParagraphContainer>
			</ContentContainer>
		))}
	</React.Fragment>
);

export default WorkExperience;
