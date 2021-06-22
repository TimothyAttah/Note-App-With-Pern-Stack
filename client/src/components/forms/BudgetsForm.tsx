import { FC, FormEvent, Fragment, useState } from 'react'
import { Button } from '@material-ui/core';
import { Add,  } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { createIncomes } from '../../redux/actions/incomesActions';
import { createExpenses } from '../../redux/actions/expensesActions';
import { v4 } from 'uuid';
import { BudgetsModal } from '../modal/BudgetsModal';

const ModalBox = styled.div`
	display: flex;
	align-items: center;
	margin-left: 100px;
  @media (max-width: 780px){
    margin-left: 10px;
  }
  @media (max-width: 700px){
    margin-left: 70px;
  }
  @media (max-width: 550px){
    margin-left: 55px;
  }
  @media (max-width: 415px){
    margin-left: 38px;
  }
  @media (max-width: 320px){
    margin-left: 30px;
  }
`;

const ExpensesForm = styled.form`
	max-width: 980px;
	width: 100%;
	border: 2px dashed blue;
	margin: 0 auto;
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	label {
		color: red;
		font-weight: 550;
		margin: 0 10px;
	}
	input {
		padding: 12px;
		border: 2px solid var(--crimson);
		border-radius: 5px;
	}
	.input-text {
		width: 400px;
	}
	.MuiButton-contained {
		background-color: var(--crimson);
		color: var(--white);
		padding: 10px 0;
		margin: 0 10px;
	}

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
		label {
			margin-left: 70px;
		}
		input,
		.input-text,
		.MuiButton-contained {
			width: 80%;
			margin: 10px auto;
			padding: 15px;
		}
		.input-text {
			margin-bottom: 20px;
		}
	}
	@media (max-width: 550px) {
		label {
			margin-left: 55px;
		}
	}
	@media (max-width: 415px) {
		label {
			margin-left: 40px;
		}
	}
	@media (max-width: 320px) {
		label {
			margin-left: 30px;
		}
	}
`;

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
				value: parseInt(value),
			};

			if (isOpen) {
        if (description || value !== '') {
          	dispatch(createExpenses(newTransaction));
        }
			} else {
        if (description || value !== '') {
          dispatch(createIncomes(newTransaction));
        }
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
				<form onSubmit={handleSubmit}>
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
				</form>
			)}
		</Fragment>
	);
}
