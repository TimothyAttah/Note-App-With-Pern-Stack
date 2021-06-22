import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Edit } from '@material-ui/icons';

import { listsIncomes } from '../../redux/actions/incomesActions';
import { StoreState } from '../../redux/reducers';

export const Incomes:FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsIncomes())
  }, [dispatch]);
  const {incomes} = useSelector((state: StoreState) => state.incomes)
  
  return (
    <Fragment>
      {incomes.length ? (
        incomes.map(income => {
          return (
						<ul key={income.id}>
              <li>
                {income.description}
                <span>{income.value}</span>
                <div>
                  <Edit />
                  <Delete />
                </div>
              </li>
						</ul>
					);
        })
      ): (
        <div><h2>You don't have any income</h2></div>
      )}
    </Fragment>
  )
}
