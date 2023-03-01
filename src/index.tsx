import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';
import Provider from 'react-redux/es/components/Provider'



const rootElem = document.getElementById('root');
if(rootElem){
  const root = ReactDOM.createRoot(rootElem)
  root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
}


