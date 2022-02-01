import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const App = () => {
  return(
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

