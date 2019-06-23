import React from 'react'
import styled from 'styled-components'

import Rating from './Rating'
import data from '../../data/skills.json'

import { StyledSubheading, StyledParagraph} from '../../styledComponents/common'

const StyledContainer = styled.div`
	padding: 1rem;
	p {
		margin: .5em 0;
	}
	p: last-child {
		margin-bottom: 1em;
	}
`

const HeadingContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	h3 {
		margin-right: .5em;
		padding-bottom: 0;
	}
`

const Skills = () => <StyledContainer>{
			data.map(skill => <div>
				<HeadingContainer>
				<StyledSubheading>{skill.name}</StyledSubheading>
				<Rating rating={skill.rating}/>
				</HeadingContainer>
				{skill.description.map(p => <StyledParagraph>{p}</StyledParagraph>)}
			</div>)
		}</StyledContainer>

export default Skills