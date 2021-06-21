import styled from 'styled-components';

export const Container = styled.section`
	/* border: 2px solid var(--gray-3);
	/* max-width: 700px; 
	margin: 0 auto;
	padding: 0 15px; */
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
	}
`;

export const GoogleBox = styled.div`
	margin: 30px 0;
	button {
		position: relative;
		display: flex;
		align-items: center;
		background-color: var(--crimson);
		width: 100%;
		border: 1px solid var(--crimson);
		font-size: 15px;
		padding: 12px 0;
		:hover {
			background-color: var(--sky-blue);
			border: 1px solid var(--sky-blue);
		}
	}
	a {
		img {
			background-color: white;
			position: absolute;
			width: 40px;
		}
		span {
			margin: 0 auto;
			color: var(--white);
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
