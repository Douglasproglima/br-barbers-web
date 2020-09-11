import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const reducersPersistidos = persistReducer(
    {
      key: 'brbarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return reducersPersistidos;
};
