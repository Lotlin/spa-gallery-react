import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authLogout,
  authRequestAsync,
} from '../store/auth/action';


export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authRequestAsync());
    }
  }, [token, dispatch]);

  const clearAuth = () => dispatch(authLogout());


  return [auth, loading, clearAuth];
};
