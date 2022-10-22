import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { StrictMode } from 'react';
import  { createRoot } from 'react-dom/client';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';

const App = () => {
  return (
    <Provider store={store}>
      <TextEditor />
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

