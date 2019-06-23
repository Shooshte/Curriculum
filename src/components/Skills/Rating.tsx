import React from "react";
import styled from "styled-components";

import cogsIcon from "./Cogs_icon_blue.svg";
import cogsIconGray from './Cogs_icon_gray.svg'

interface Props {
	rating: number;
}

const StyledCog = styled.img`
	height: 2rem;
`;

const Rating = (props: Props) => (
	<div>
		<StyledCog src={props.rating > 0 ? cogsIcon : cogsIconGray} alt="cogs-rating" />
		<StyledCog src={props.rating > 1 ? cogsIcon : cogsIconGray} alt="cogs-rating" />
		<StyledCog src={props.rating > 2 ? cogsIcon : cogsIconGray} alt="cogs-rating" />
		<StyledCog src={props.rating > 3 ? cogsIcon : cogsIconGray} alt="cogs-rating" />
		<StyledCog src={props.rating > 4 ? cogsIcon : cogsIconGray} alt="cogs-rating" />
	</div>
);

export default Rating;
