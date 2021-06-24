import { v4 } from 'uuid';
import { IncomesActionTypes } from '../actionsTypes/incomesTypes';
import { InitialIncomes } from '../Interface';
import { IncomesTypes } from '../types';

const initialState: InitialIncomes = {
	incomes: [
		// {
		// 	id: v4(),
		// 	description: 'Finish projects',
		// 	value: 3000,
		// },
		// {
		// 	id: v4(),
		// 	description: 'Salary',
		// 	value: 4000000,
		// },
		// {
		// 	id: v4(),
		// 	description: 'Testing',
		// 	value: 1000,
		// },
		// {
		// 	id: v4(),
		// 	description: 'Side job',
		// 	value: 2000,
		// },
	],
};

export const incomesReducer = (
	state = initialState,
	action: IncomesActionTypes
) => {
	switch (action.type) {
		case IncomesTypes.LISTS_INCOMES:
			return {
				...state,
				incomes: action.payload
			};
		case IncomesTypes.CREATE_INCOMES:
			return {
				...state,
				incomes: [action.payload, ...state.incomes],
			};
		case IncomesTypes.EDIT_INCOMES:
			return {
				...state,
				incomes: state.incomes.map(expense =>
					expense.incomes_id === action.payload.id ? action.payload : expense
				),
			};
		case IncomesTypes.DELETE_INCOMES:
			return {
				...state,
				incomes: state.incomes.filter(income => income.incomes_id !== action.payload),
			};
		default:
			return state;
	}
};
