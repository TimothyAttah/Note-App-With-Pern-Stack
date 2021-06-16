import { UsersTypes } from '../types';
import * as api from '../../apis';
import { IUser } from '../Interface';
import { Dispatch } from 'redux';
import { AuthTypesActions } from '../actionsTypes/authTypes';

export const signUpUser = (userData: IUser) => async (dispatch: Dispatch) =>  {
try {
  const { data } = await api.signUpUser(userData);
  console.log(data); 
  dispatch<AuthTypesActions>({
    type: UsersTypes.SIGN_UP,
    payload: data.users
  })
} catch (err) {
  console.log(err);
}

}