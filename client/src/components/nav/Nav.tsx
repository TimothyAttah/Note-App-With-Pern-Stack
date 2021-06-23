import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { navMenu } from '../helpers';
import { Button, Drawer, IconButton } from '@material-ui/core';
import { AddCircle, AddOutlined, Menu } from '@material-ui/icons';

import {
	NavContainer,
	NavsLeft,
	NavsRight,
	activeNav,
	SidebarContainer,
	Sidebars,
	NavLists,
	MenuBar,
} from './NavStyles';

export const Nav: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleDrawer = () => {
		setIsOpen(true);
	};
	return (
		<NavContainer>
			<MenuBar>
				<IconButton onClick={handleDrawer}>
					<Menu />
				</IconButton>
			</MenuBar>
			<NavLists>
				{navMenu.nav.map((item, index) => {
					return (
						<li key={index}>
							<NavLink to={item.url} exact activeStyle={activeNav}>
								{item.name}
								<span>{item.icon}</span>
							</NavLink>
						</li>
					);
				})}
			</NavLists>
			<NavsLeft>
				<Link to='/api/users/notes/create/note'>
					<Button>
						<AddOutlined />
						Create Note
					</Button>
				</Link>
			</NavsLeft>
			<NavsRight>
				<Link to='/api/users/notes/create/note'>
					<IconButton>
						<AddCircle />
					</IconButton>
				</Link>
			</NavsRight>
			<Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
				<SidebarContainer>
					<Sidebars>
						{navMenu.nav.map((item, index) => {
							return (
								<li key={index}>
									<NavLink to={item.url} exact activeStyle={activeNav}>
										{item.name}
										<span>{item.icon}</span>
									</NavLink>
								</li>
							);
						})}
					</Sidebars>
				</SidebarContainer>
			</Drawer>
		</NavContainer>
	);
};
