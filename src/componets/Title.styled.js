import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h1`
	${(props) => css`
		color: ${props.color};
	`}

	&:hover {
		color: gray;
	}

	${(props) =>
		props.fontBigger
			? css`
					font-size: 4rem;
			  `
			: css`
					font-size: 2rem;
			  `}

	@media only screen and (max-width:800px) {
		color: black;
	}

	.parent & {
		background-color: red;
	}
`;
