import React from "react";
import styled from "styled-components";

import PersonalInfo from "./components/PersonalInfo";

const StyledContainer = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	@media screen and (min-width: 768px) {
		padding: 1rem 53px;
	}
`;

const App: React.FC = () => {
	return (
		<StyledContainer>
			<PersonalInfo />
		</StyledContainer>
	);
};

export default App;
