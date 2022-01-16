import styled from 'styled-components';

export const NotesReadContainer = styled.div`
	margin-top: 150px;
`;

export const NotesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 10px;
	@media (max-width: 800px){
		flex-direction: column;
	}
`;

export const NotesLeft = styled.div`
	max-width: 230px;
	width: 100%;
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
	.MuiButton-root {
		display: none;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 800px) {
		max-width: 180px;
		margin: 10px auto;
		h2 {
			font-size: 1.8rem;
		}
		.MuiButton-root {
			display: block;
		margin:  10px auto;
		}
	}
`;

// export const NotesLeftBottom = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-size: 1.3rem;
// 	font-weight: bold;
// 	margin: 12px 0;
// 	.MuiAvatar-root {
// 		margin-right: 10px;
// 		background-color: var(--clr-lightBlue);
// 	}
// 	@media (max-width: 600px){
// 		font-size: 1rem;
// 	}
// `;



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
	@media (max-width: 800px) {
		padding: 0px 10px;
		margin-left: 0px;
	}
`;

export const NotesBottom = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	@media (max-width: 350px){
		font-size: 1rem;
	}
	`;

	export const NotesBottomLikes = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 400px;
		width: 100%;
		.MuiAvatar-root {
			margin-right: 10px;
			background-color: var(--clr-lightBlue);
		}
		@media (max-width: 800px) {
			max-width: 120px;
			.MuiButton-root {
				display: none;
			}
			/* .MuiAvatar-root {
			width: 30px;
			height: 30px;
			.MuiSvgIcon-root {
				font-size: 1.2rem;
			}
		} */
		}
		@media (max-width: 350px) {
			max-width: 100px;
			.MuiAvatar-root {
				width: 30px;
				height: 30px;
				.MuiSvgIcon-root {
					font-size: 1.2rem;
				}
			}
		}
	`;

	export const NotesComment = styled.div`
		position: relative;
	`;