import { v4 } from 'uuid';
import { NotesTypes } from "../types";
import { NotesActionsTypes } from "../actionsTypes/actionsTypes";
import { Notes } from "../interface";
import { images } from '../../components/images';

const initialState: Notes = {
	notes: [
		{
			_id: v4(),
			title: 'Happy new year',
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum cumque tenetur nemo unde quis veniam modi officia error iusto incidunt reprehenderit labore corrupti blanditiis a tempora repellendus! Natus consequuntur possimus, fugiat deleniti fuga ipsam doloremque voluptate dolorum, illo commodi cupiditate.`,
			createdAt: new Date(),
			name: 'Jane Jack',
			profilePicture: images.PostThree,
			comments: [
				{
					_id: v4(),
					content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum`,
					name: 'Tony Black',
					profilePicture: '',
					createdAt: new Date(),
				},
				{
					_id: v4(),
					content: `Nice one`,
					name: 'Jane Jack',
					profilePicture: images.Alex,
					createdAt: new Date(),
				},
			],
		},
		{
			_id: v4(),
			title: 'Congratulations on Finishing yor projects',
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum 
      cumque tenetur nemo unde quis veniam modi officia error iusto incidunt reprehenderit labore corrupti blanditiis a tempora repellendus! Natus consequuntur possimus, fugiat deleniti fuga ipsam doloremque voluptate dolorum, illo commodi cupiditate.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum cumque tenetur nemo unde quis veniam modi officia error iusto incidunt reprehenderit labore corrupti blanditiis a tempora repellendus! Natus consequuntur possimus, fugiat deleniti fuga ipsam doloremque voluptate dolorum, illo commodi cupiditate.`,
			createdAt: new Date(),
			name: 'JohnWalker MatthewStar',
			profilePicture: '',
			comments: [
				{
					_id: v4(),
					content: `Nice one`,
					name: 'Tony Black',
					profilePicture: images.Alex,
					createdAt: new Date(),
				},
				{
					_id: v4(),
					content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum`,
					name: 'JohnWalker MatthewStar',
					profilePicture: images.Soka,
					createdAt: new Date(),
				},
				{
					_id: v4(),
					content: `Nice one`,
					name: 'Alex WillowStar',
					profilePicture: '',
					createdAt: new Date(),
				},
			],
		},
		{
			_id: v4(),
			title: 'Job Opportunities',
			content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars`,
			createdAt: new Date(),
			name: 'Willow Black',
			profilePicture: images.Alex,
			comments: [
				{
					_id: v4(),
					content: `Nice one`,
					name: 'Tony Black',
					profilePicture: '',
					createdAt: new Date(),
				},
				{
					_id: v4(),
					content: `Nice one`,
					name: 'Jane Jack',
					profilePicture: '',
					createdAt: new Date(),
				},
			],
		},

		{
			_id: v4(),
			title: 'Thanking God',
			content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars`,
			createdAt: new Date(),
			name: 'Austin Carter',
			profilePicture: images.Soka,
			comments: [
				{
					_id: v4(),
					content: `Nice one`,
					name: 'Tony Black',
					profilePicture: '',
					createdAt: new Date(),
				},
			],
		},
	],
};

export const notes = (state = initialState, action: NotesActionsTypes) => {
  switch (action.type) {
    case NotesTypes.NOTE_CREATE:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    case NotesTypes.NOTES_LISTS:
      return {
        ...state
      }
    case NotesTypes.NOTE_LIST:
      return {
        ...state,
        notes: state.notes.map(note => note._id === action.payload.id ? action.payload : note)
      }
    case NotesTypes.NOTE_DELETE:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload)
      }
    case NotesTypes.NOTE_EDIT:
      return {
        ...state,
        notes: state.notes.map(note => note._id === action.payload?.id ? action.payload : note)
      }
    default:
      return {
        ...state
      }
  }
}
