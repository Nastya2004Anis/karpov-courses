/*import { App} from "./components/App/App.js";
import React from 'react'; 
import ReactDOM from 'react-dom'; 
//import './common.css';
import '../src/common.css';

ReactDOM.render(<App />, document.getElementById('root'));
  */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from "./components/App/App.js";
import '../src/common.css'; // стили

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
