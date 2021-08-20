import styled from 'styled-components';

export const NotesReadContainer = styled.div`
	margin-top: 150px;
`;

export const NotesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 10px;
`;

export const NotesLeft = styled.div`
	max-width: 220px;
	width: 100%;
	/* border: 3px solid green; */
	text-align: center;
	h2 {
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
		padding: 5px 0;
		margin-top: 10px;
	}
	a .MuiAvatar-root {
		width: 100px;
		height: 100px;
		margin: 0 auto;
		.MuiSvgIcon-root {
			font-size: 5rem;
		}
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 600px) {
		max-width: 130px;
		h2 {
			font-size: 1.4rem;
		}
	}
`;

export const NotesLeftBottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
	font-weight: bold;
	margin: 12px 0;
	.MuiAvatar-root {
		margin-right: 10px;
		background-color: var(--clr-lightBlue);
	}
`;

export const NotesRight = styled.div`
	width: 100%;
	padding: 0px 30px;
	box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
	background-color: #e5e5e5;
	margin-left: 40px;
	h1 {
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
		padding: 10px 0;
	}
	p {
		line-height: 2.3rem;
		font-size: 1.3rem;
		margin-top: 20px;
	}
	@media (max-width: 600px) {
		padding: 0px 10px;
		margin-left: 20px;
	}
`;