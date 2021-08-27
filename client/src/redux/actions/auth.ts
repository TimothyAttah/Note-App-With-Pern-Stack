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
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error)
    }
  }
}

export const signIn = (userData: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.signIn(userData);
    dispatch<AuthTypesActions>({
      type: UserTypes.SIGN_IN,
      payload: data.results
    })
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error);
    }
  }
}