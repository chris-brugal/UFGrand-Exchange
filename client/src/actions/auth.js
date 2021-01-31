import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
  
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  
export const signup = (formData, router) => async (dispatch) => {
try {
    
    router.push('/');
} catch (error) {
    console.log(error);
}
};