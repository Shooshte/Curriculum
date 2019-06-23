import React from 'react'
import data from '../../data/skillAssesment.json'
import styled from 'styled-components'

import Rating from './Rating'

import {StyledSubheading, StyledParagraph} from '../../styledComponents/common'

const StyledContainer = styled.div`
	background-color: #F5F6FA;
	padding: 1rem;
	p {
		margin: .5em 0;
	}
	@media screen and (min-width: 768px) {
		max-width: 600px;
		margin-right: 1rem;
	}
`

const SkillAssesment = () => <StyledContainer>
<StyledSubheading>Skill assesment</StyledSubheading>
	{data.map(skill => <div>
		<Rating rating={skill.rating}/>
		<StyledParagraph>{skill.text}</StyledParagraph>
	</div>)}
</StyledContainer>

export default SkillAssesment