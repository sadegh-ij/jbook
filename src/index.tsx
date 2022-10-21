import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { StrictMode } from 'react';
import  { createRoot } from 'react-dom/client';
import TextEditor from './components/text-editor';


const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

