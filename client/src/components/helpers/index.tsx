import {
	AttachMoneyOutlined,
	Delete,
	Edit,
	Event,
	ListAlt,
	Notes,
	Print,
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
			url: '/api/users/notes',
		},
			{
		name: 'Todos',
		icon: <ListAlt />,
		url: '/api/users/todos',
	},
	{
		name: 'Events',
		icon: <Event />,
		url: '/api/users/events',
	},
	{
		name: 'Budgets',
		icon: <AttachMoneyOutlined />,
		url: '/api/users/budgets',
	},
	{
		name: 'Settings',
		icon: <Settings />,
		url: '/api/users/settings',
	}
	]
};

