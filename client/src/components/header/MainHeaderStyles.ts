import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
	position: fixed;
	max-width: 1500px;
	width: 100%;
	margin: 0 auto;
	/* background-color: #121212; */
	background-color: var(--clr-lightBlue);
	/* padding: 10px 0px; */
	padding-top: 10px;
	/* margin-bottom: 300px; */
	/* top: 100px; */
	top: 0;
	left: 0;
	right: 0;
	z-index: 9990;
	/* padding-bottom: 50px; */
	/* @media (max-width: 412px){
		max-width: 410px;
	} */
`;

export const HeaderContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
`;

export const HeaderLeft = styled.div`
	position: relative;
	flex: 2;
	margin-right: 40px;
	a h1 {
		color: var(--clr-light);
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

export const HeaderLeftPrimary = styled.div`
	position: relative;
	display: none;
	a .MuiSvgIcon-root {
		color: var(--clr-light);
		font-size: 40px;
		margin-right: 40px;
	}
	@media (max-width: 800px) {
		display: flex;
	}
	@media (max-width: 375px) {
		a .MuiSvgIcon-root {
			margin-right: 10px;
		}
	}
`;
export const HeaderCenter = styled.div`
	flex: 3;
	background-color: var(--clr-light);
	width: 100%;
	height: 30px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	margin-right: 5px;
	input {
		width: 100%;
		border: none;
		margin-left: 10px;
		padding: 5px 0;
	}
	.MuiSvgIcon-root {
		font-size: 20px;
	}
	@media (max-width: 375px) {
		padding: 0 5px;
		input {
			margin-left: 2px;
		}
		.MuiSvgIcon-root {
			font-size: 15px;
		}
	}
`;

export const HeaderRight = styled.div`
	position: relative;
	flex: 2;
	display: flex;
	color: var(--clr-light);
	margin-left: 30px;
	@media (max-width: 950px) {
		flex: 0;
		margin-left: 5px;
	}
	@media (max-width: 375px) {
		margin-left: 0;
	}
`;

export const HeaderRightLink = styled.div`
	position: relative;
	span {
		margin-right: 10px;
		font-size: 14px;
		cursor: pointer;
	}
	@media (max-width: 950px) {
		display: none;
		margin-right: 0px;
	}
`;

export const HeaderIconsItem = styled.div`
	position: relative;
	margin-right: 30px;
	span {
		width: 15px;
		height: 15px;
		background-color: var(--clr-accent);
		color: var(--clr-light);
		font-size: 10.5px;
		position: absolute;
		clip-path: circle();
		top: -10px;
		right: -5px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
	@media (max-width: 600px) {
		margin-right: 10px;
	}
`;
