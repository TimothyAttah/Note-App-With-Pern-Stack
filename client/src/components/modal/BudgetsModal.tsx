import {  useState } from 'react';
import { IconButton, Menu } from '@material-ui/core';

import { ArrowDropDown } from '@material-ui/icons';
import { FC } from 'react';
//import { HeaderDropDown } from '../header/HeaderNavsStyles';

interface Props {
  setIsOpen: (open:boolean) => void;
}

export const BudgetsModal:FC<Props> = ({ setIsOpen }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton onClick={handleClick}>
				<ArrowDropDown />
			</IconButton>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				style={{ top: '50px', padding: '0', margin: '0' }}
			>
				<div>
					<div onClick={() => setIsOpen(false)}>+</div>
					<div onClick={() => setIsOpen(true)}>	-	</div>
				</div>
			</Menu>
		</>
	);
};

