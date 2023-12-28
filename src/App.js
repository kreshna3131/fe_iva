import { RouterProvider } from 'react-router-dom';
import router from '../src/router';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../src/store';
import thunk from 'redux-thunk';


function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </>
  );
}

export default App;
