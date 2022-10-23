import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { StrictMode } from 'react';
import  { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

