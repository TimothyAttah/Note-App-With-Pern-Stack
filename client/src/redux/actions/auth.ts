import { UserTypes } from "../types";
import * as api from '../api';
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { AuthTypesActions } from "../actionsTypes/authTypes";
import history from "../../history";

export const signUp = (userData: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.signUp(userData);
    
    dispatch<AuthTypesActions>({
      type: UserTypes.SIGN_UP,
      payload: data
    })
    history.push('/users/signin');
    toast.success(data.message);
  } catch (err:any) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error)
    }
  }
}

export const signIn = (userData: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.signIn(userData);
    console.log(data);
    
    dispatch<AuthTypesActions>({
      type: UserTypes.SIGN_IN,
      payload: data.results
    })
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('user', JSON.stringify(data.results))
    history.push('/');
    window.location.reload();
		toast.success(data.message);
  } catch (err:any) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error);
    }
  }
}

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getUsers();
    console.log(data);
    
    dispatch<AuthTypesActions>({
      type: UserTypes.GET_USERS,
      payload: data.allUsers
    })
  } catch (err:any) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}
export const getUser = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getUser(id);
    console.log(data);
    
    dispatch<AuthTypesActions>({
      type: UserTypes.GET_USER,
      payload: data
    })
  } catch (err:any) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}

