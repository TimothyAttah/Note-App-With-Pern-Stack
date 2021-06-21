import styled from 'styled-components';

export const NavContainer = styled.nav`
	width: 100%;
	border: 2px solid red;
	background-color: var(--crimson);
	padding: 40px 20px 25px 25px;
	opacity: 0.9;
	position: sticky;
	top: 70px;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 30px; */
  /* margin-bottom: 20px; */
 
`;

export const MenuBar = styled.div`
	.MuiSvgIcon-root {
		color: var(--white);
    font-size: 30px;
	}
`;


export const NavLists = styled.ul`
	width: 600px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	li {
		display: flex;
		align-items: center;
		box-shadow: -2px -2px 2px #fff7, 2px 2px 2px #0002;
		cursor: pointer;
	}
	li > a {
		display: flex;
		align-items: center;
		background-color: var(--white);
		color: var(--black);
		padding: 10px;

	}
`;



// export const NavsCenter = styled.ul`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 600px;
// 	margin: 0;
// 	padding: 0;

// 	li {
// 		display: flex;
// 		align-items: center;
// 		background-color: crimson;
// 		box-shadow: -2px -2px 2px #fff7, 2px 2px 2px #0002;
// 		cursor: pointer;
// 		:hover {
// 			animation: opacity 0.2s linear;
// 			@keyframes opacity {
// 				from {
// 					opacity: 0;
// 					transform: scale(0.7);
// 				}
// 			}
// 		}
// 	}
// 	li > a {
// 		display: flex;
// 		align-items: center;
// 		padding: 10px 15px;
// 		color: #fff;
// 		span {
// 			padding-left: 3px;
// 		}
// 		:hover {
// 			border-bottom: 2px solid #909090;
// 			color: #377cff;
// 			background-color: #e5e5e5;
// 		}
// 	}
// 	@media (max-width: 900px) {
// 		display: none;
// 	}
// `;
export const NavsLeft = styled.div`
	.MuiButton-root {
		padding: 5px 12px;
		background-color: var(--white);
		color: var(--black);
		:hover {
			background-color: crimson;
			border: 1px solid var(--white);
			color: var(--white);
			opacity: 0.9;
		}
		a {
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media (max-width: 414px) {
		display: none;
	}
`;
export const NavsRight = styled.div`
	display: none;
	@media (max-width: 414px) {
		display: block;
	}
`;

export const activeNav = {
	borderBottom: '2px solid #909090',
	color: '#377cff',
	backgroundColor: '#e5e5e5',
};

export const SidebarContainer = styled.div`
	width: 250px;
  padding: 50px 30px;
`;

export const Sidebars = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	li {
		display: flex;
		align-items: center;
	}
	li a {
		width: 100%;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #fff;
		margin: 10px 0;
		padding: 15px;
		background-color: #377cff;
		border-radius: 6px;
		span {
			padding-left: 10px;
		}
		:hover {
		color: #377cff;
     background-color: #e5e5e5;
     border-bottom: 1px solid #909090;
		}
	}
`;
