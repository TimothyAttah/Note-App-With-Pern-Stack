import { IncomesTypes } from '../types';

interface ListsIncomes {
	type: IncomesTypes.LISTS_INCOMES;
}

interface CreateIncomes {
	type: IncomesTypes.CREATE_INCOMES;
	payload: object;
}

interface EditIncomes {
	type: IncomesTypes.EDIT_INCOMES;
	payload: {
		id: string;
		Incomes: object;
	};
}

interface DeleteIncomes {
	type: IncomesTypes.DELETE_INCOMES;
	payload: string;
}

export type IncomesActionTypes =
	| ListsIncomes
	| CreateIncomes
	| EditIncomes
	| DeleteIncomes;
