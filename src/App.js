import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart';
import ContextProvider from './Components/ContextProvider';
import FormData from './Components/Form/FormData';
import Model from './Components/Model/Model';

function App() {
 
  return (
    <ContextProvider>
    <div className="App row container-flex">
      <div className="col">
      <FormData/>
      <Model/>
      </div>
      <div className="col">
      <Cart/>
      </div>
    </div>
    </ContextProvider>
  );
}

export default App;
