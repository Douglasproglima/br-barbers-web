import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import ThemeSwitcher from '~/components/ThemeSwitcher';
import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <Routes />
            <GlobalStyle />
            <ToastContainer
              className="toast-container"
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnHover={false}
              draggable
              progress={undefined}
              transition={Flip}
            />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
