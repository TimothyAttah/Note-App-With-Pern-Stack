import { UsersTypes } from '../types';
import * as api from '../../apis';
import { ISigninUser, IUser } from '../Interface';
import { Dispatch } from 'redux';
import { AuthTypesActions } from '../actionsTypes/authTypes';
import history from '../../history';

export const signUpUser = (userData: IUser) => async (dispatch: Dispatch) =>  {
try {
  const { data } = await api.signUpUser(userData);
  console.log(data); 
  dispatch<AuthTypesActions>({
    type: UsersTypes.SIGN_UP,
    payload: data.users
  })
  history.push('/auth/users/signin');
} catch (err) {
  console.log(err);
}
}

export const signInUser = (userData: ISigninUser) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.signInUser(userData);
    console.log(data);
    dispatch<AuthTypesActions>({
      type: UsersTypes.SIGN_IN,
      payload: data.results
    })
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    history.push('/users/todos');
    window.location.reload(false);
  } catch (err) {
    console.log(err);
  }
}

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getUsers()
    console.log(data);  
    dispatch<AuthTypesActions>({
      type: UsersTypes.GET_USER,
      payload: data.savedUsers
    })
  } catch (err) {
    console.log(err);
  }
}