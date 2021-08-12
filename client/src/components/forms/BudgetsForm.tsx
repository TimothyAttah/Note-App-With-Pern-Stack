import { FC, FormEvent, Fragment, useState } from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { createIncomes } from '../../redux/actions/incomesActions';
import { createExpenses } from '../../redux/actions/expensesActions';
import { v4 } from 'uuid';
import { BudgetsModal } from '../modal/BudgetsModal';
import { ModalBox, ExpensesForm, IncomesForm } from './BudgetsFormStyles';

export const BudgetsForm: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTransaction = {
			id: v4(),
			description,
			values: parseInt(value),
		};

		if (isOpen) {
			dispatch(createExpenses(newTransaction));
		} else {
			// if (description && value !== '') {
			//   dispatch(createIncomes(newTransaction));
			// }
			dispatch(createIncomes(newTransaction));
		}

		setDescription('');
		setValue('');
	};
	return (
		<Fragment>
			<ModalBox>
				<h4>Choose Transaction </h4>
				<BudgetsModal setIsOpen={setIsOpen} />
			</ModalBox>
			{isOpen ? (
				<ExpensesForm onSubmit={handleSubmit}>
					<label>Expenses Item:</label>
					<input
						type='text'
						placeholder='Enter expenses items...'
						className='input-text'
						onChange={e => setDescription(e.target.value)}
						value={description}
						name='item'
					/>
					<label>Expenses Value:</label>
					<input
						type='number'
						onChange={e => setValue(e.target.value)}
						name='value'
						value={value}
						className='input-value'
					/>
					<Button type='submit' variant='contained' size='small'>
						-
					</Button>
				</ExpensesForm>
			) : (
				<IncomesForm onSubmit={handleSubmit}>
					<label>Income Item:</label>
					<input
						type='text'
						placeholder='Enter income items...'
						className='input-text'
						onChange={e => setDescription(e.target.value)}
						name='item'
						value={description}
					/>
					<label>Income Value:</label>
					<input
						type='number'
						className='input-value'
						onChange={e => setValue(e.target.value)}
						name='value'
						value={value}
					/>
					<Button
						type='submit'
						variant='contained'
						size='small'
						color='inherit'
					>
						<Add />
					</Button>
				</IncomesForm>
			)}
		</Fragment>
	);
};
