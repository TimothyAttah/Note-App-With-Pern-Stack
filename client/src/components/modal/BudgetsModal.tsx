import {  useState, FC, Fragment } from 'react';
import { IconButton, Menu } from '@material-ui/core';
import styled from 'styled-components';
import { ArrowDropDown, Add } from '@material-ui/icons';

interface Props {
  setIsOpen: (open:boolean) => void;
}

const ModalWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50px;
.green {
	color: green;
}
.red {
	color: red;
}
`;

export const BudgetsModal:FC<Props> = ({ setIsOpen }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<IconButton onClick={handleClick}>
				<ArrowDropDown />
			</IconButton>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className='modal__menu'
				 style={{ top: '50px', padding: '0', margin: '0' }}
			>
				<ModalWrapper>
					<div className='green' onClick={() => setIsOpen(false)}><Add /></div>
					<div className='red' onClick={() => setIsOpen(true)}>	-	</div>
				</ModalWrapper>
			</Menu>
		</Fragment>
	);
};

