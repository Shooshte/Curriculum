import React from "react";
import styled from "styled-components";

import SkillAssesment from "./SkillAssesment";
import Skills from './Skills'

import {StyledHeading} from '../../styledComponents/common'

const StyledContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
	}
`

const SkillsContainer: React.FC = () => (
	<div>
	<StyledHeading>Skills</StyledHeading>
	<StyledContainer>
		<SkillAssesment/>
		<Skills/>
	</StyledContainer>
	</div>
);

export default SkillsContainer;
