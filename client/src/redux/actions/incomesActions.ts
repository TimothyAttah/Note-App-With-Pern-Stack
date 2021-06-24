import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { IncomesActionTypes } from '../actionsTypes/incomesTypes';
import { IncomesTypes } from '../types';
import * as api from '../../apis';

export const listsIncomes = () => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.listsIncomes();
		dispatch<IncomesActionTypes>({
			type: IncomesTypes.LISTS_INCOMES,
			payload: data.incomes
		})
	} catch (err) {
		if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
		console.log(err);
	}
};

export const createIncomes = (incomes: object) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.createIncomes(incomes);
		dispatch<IncomesActionTypes>({
			type: IncomesTypes.CREATE_INCOMES,
			payload: data.results
		})
			toast.success(data.message);
	} catch (err) {
		if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
			console.log(err);
	}
};

export const editIncomes =
	(id: string, incomes: object) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.editIncomes(id, incomes);
		dispatch<IncomesActionTypes>({
			type: IncomesTypes.EDIT_INCOMES,
			payload: data.results
		})
			toast.success(data.message);
	} catch (err) {
			if (err.response && err.response.data) {
				return toast.error(err.response.data.error);
			}
			console.log(err);
	}
	};

export const deleteIncomes = (id: string) => async (dispatch: Dispatch) => {
try {
	const { data } = await api.deleteIncomes(id);
	dispatch<IncomesActionTypes>({
		type: IncomesTypes.DELETE_INCOMES,
		payload: id
	})
	toast.success(data.message)
} catch (err) {
		if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
		console.log(err);
}
};
