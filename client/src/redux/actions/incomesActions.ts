import { Dispatch } from 'redux';
import { IncomesActionTypes } from '../actionsTypes/incomesTypes';
import { IncomesTypes } from '../types';

export const listsIncomes = () => (dispatch: Dispatch) => {
	dispatch<IncomesActionTypes>({
		type: IncomesTypes.LISTS_INCOMES,
	});
};

export const createIncomes = (Incomes: object) => (dispatch: Dispatch) => {
	dispatch<IncomesActionTypes>({
		type: IncomesTypes.CREATE_INCOMES,
		payload: Incomes,
	});
};

export const editIncomes =
	(id: number, Incomes: object) => (dispatch: Dispatch) => {
		dispatch<IncomesActionTypes>({
			type: IncomesTypes.EDIT_INCOMES,
			payload: { id, Incomes },
		});
	};

export const deleteIncomes = (id: number) => (dispatch: Dispatch) => {
	dispatch<IncomesActionTypes>({
		type: IncomesTypes.DELETE_INCOMES,
		payload: id,
	});
};