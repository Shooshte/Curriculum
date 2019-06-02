import React from "react";
import styled from "styled-components";

// images
import headshot from "./headshot.png";
import cakeIcon from "./cakeIcon.svg";
import homeIcon from "./homeIcon.svg";
import mailIcon from "./mailIcon.svg";

// data
import personalInfo from "../../data/personalInfo.json";

// styled components
import {
	StyledHeading,
	StyledParagraph,
	StyledHr
} from "../../styledComponents/common";

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const PersonalInfoContainer = styled.div`
	margin-left: 1rem;
`;

const StyledIcon = styled.img`
	margin: 0 0.5rem 0 0;
`;

const PotraitImage = styled.img`
	margin-bottom: 1em;
	border: 1px inset rgba(0, 0, 0, 0.8);
	border-radius: 100%;
`;

const PersonalInfo: React.FC = () => {
	return (
		<HeaderContainer>
			<PotraitImage src={headshot} alt="portrait" />
			<PersonalInfoContainer>
				<StyledHeading>{personalInfo.name}</StyledHeading>
				<StyledParagraph>
					<StyledIcon src={cakeIcon} alt="birthday-cake" />
					{`: ${personalInfo.birthDate}`}
				</StyledParagraph>
				<StyledParagraph>
					<StyledIcon src={homeIcon} alt="birthday-cake" />
					{`: ${personalInfo.address}`}
				</StyledParagraph>
				<StyledParagraph>
					<StyledIcon src={mailIcon} alt="birthday-cake" />
					{`: ${personalInfo.email}`}
				</StyledParagraph>
			</PersonalInfoContainer>
		</HeaderContainer>
	);
};

export default PersonalInfo;
