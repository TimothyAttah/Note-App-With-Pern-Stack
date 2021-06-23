import styled from 'styled-components';

export const CloseButton = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Container = styled.section`
	h1 {
		text-align: center;
		margin: 20px 0;
		letter-spacing: 1.5px;
		font-size: 30px;
	}
	h3 {
		color: var(--sky-blue);
		text-transform: capitalize;
	}
	p {
		font-size: 18px;
		color: var(--dark-gray);
		text-transform: capitalize;
	}
	small {
		color: var(--dark-gray);
		font-weight: 400;
		span > a {
			color: var(--sky-blue);
			margin-left: 5px;
		}
	}
	@media (max-width: 500px) {
		p {
			font-size: 15px;
		}
	}
	@media (max-width: 412px) {
		p {
			font-size: 12px;
		}
	}
	@media (max-width: 320px) {
		p {
			font-size: 10px;
			font-weight: 500;
		}
		small {
			font-size: 10px;
			font-weight: 700;
		}
	}
`;

export const GoogleBox = styled.div`
	margin: 30px 0;
	a > button {
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--crimson);
		border: 1px solid var(--crimson);
		border-radius: 5px;
		color: var(--white);
		font-size: 15px;
		:hover {
			background-color: var(--sky-blue);
			border: 1px solid var(--sky-blue);
		}
		span {
			margin: 0 auto;
		}
		img {
			justify-content: flex-start;
		}
		@media (max-width: 360px) {
			font-size: 12px;
		}
	}
`;

export const ImgBox = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: var(--white);
	padding: 7px 5px;
	border-radius: 3px;
	:hover {
		border: 1px solid var(--sky-blue);
	}
	@media (max-width: 360px) {
		img {
			width: 25px;
		}
	}
`;

export const Divider = styled.div`
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 20px;
	color: #b6b8c9;
	span {
		padding: 0 15px;
	}
`;
