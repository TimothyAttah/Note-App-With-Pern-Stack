import {
	AttachMoneyOutlined,
	Event,
	ListAlt,
	Notes,
	Settings,
} from '@material-ui/icons';

interface Menu {
	name: string;
	icon: any;
	url: string;
}

type NavMenu = {
  nav: Menu[]
}

export const navMenu: NavMenu = {
	nav: [
		{
			name: 'Notes',
			icon: <Notes />,
			url: '/users/notes',
		},
			{
		name: 'Todos',
		icon: <ListAlt />,
		url: '/users/todos',
	},
	{
		name: 'Events',
		icon: <Event />,
		url: '/users/events',
	},
	{
		name: 'Budgets',
		icon: <AttachMoneyOutlined />,
		url: '/users/budgets',
	},
	{
		name: 'Settings',
		icon: <Settings />,
		url: '/users/settings',
	}
	]
};

