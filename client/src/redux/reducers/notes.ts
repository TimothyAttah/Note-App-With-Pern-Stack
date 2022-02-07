import { v4 } from 'uuid';
import { NotesTypes } from '../types';
import { NotesActionsTypes } from '../actionsTypes/actionsTypes';
import { Notes } from '../InterfaceRedux';
import { images } from '../../components/images';

const initialState: Notes = {
  notes: [
    {
      _id: v4(),
      title: 'Happy new year',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      createdAt: new Date(),
      name: 'Jane Jack',
      profilePicture: images.PostThree,
      comments: [
        {
          _id: v4(),
          comment: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum`,
          // name: 'Tony Black',
          // profilePicture: '',
          // createdAt: new Date(),
        },
        {
          _id: v4(),
          comment: `Nice one`,
        },
      ],
    },
    {
      _id: v4(),
      title: 'Congratulations on Finishing yor projects',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum
      cumque tenetur nemo unde quis veniam modi officia error iusto incidunt reprehenderit labore corrupti blanditiis a tempora repellendus! Natus consequuntur possimus, fugiat deleniti fuga ipsam doloremque voluptate dolorum, illo commodi cupiditate.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! `,
      createdAt: new Date(),
      name: 'JohnWalker MatthewStar',
      profilePicture: '',
      comments: [
        {
          _id: v4(),
          comment: `Nice one`,
        },
        {
          _id: v4(),
          comment: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque dolorum eius! Sunt voluptate quisquam nostrum explicabo sapiente iusto illo quod incidunt labore, dignissimos ea minima ratione, voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum`,
        },
        {
          _id: v4(),
          comment: `Nice one`,
          // name: 'Alex WillowStar',
          // profilePicture: '',
          // createdAt: new Date(),
        },
      ],
    },
    {
      _id: v4(),
      title: 'Job Opportunities',
      content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars voluptatum earum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid quisquam! Perspiciatis, natus architecto inventore, ducimus voluptate atque dolorum`,
      createdAt: new Date(),
      name: 'Matthew Ben',
      profilePicture: images.Soka,
      comments: [
        {
          _id: v4(),
          comment: `Beautiful, Nice one`,
        },
        {
          _id: v4(),
          comment: `Nice one`,
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
        notes: [action.payload, ...state.notes],
      };
    case NotesTypes.NOTES_LISTS:
      return {
        ...state,
      };
    case NotesTypes.NOTE_LIST:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload.id ? action.payload : note,
        ),
      };
    case NotesTypes.NOTE_DELETE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case NotesTypes.NOTE_EDIT:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload?.id ? action.payload : note,
        ),
      };
    case NotesTypes.NOTE_COMMENT:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id
            ? { ...note, comments: [...note.comments, action.payload.comment] }
            : note,
        ),
        // notes: state.notes.map(note => {
        // 	if (note._id !== action.payload.id) return note;
        // 	// return {...note.comments, comments:[...note.comments, action.payload]}
        // 	return [...note.comments, action.payload]
        // })
      };
    case NotesTypes.DELETE_COMMENT:
      return {
        ...state,
        notes: state.notes.map((note) => ({
          ...note,
          comments: note.comments.filter(
            (comment) => comment._id !== action.payload,
          ),
        })),
      };
    default:
      return {
        ...state,
      };
  }
};
