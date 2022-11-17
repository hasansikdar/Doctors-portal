import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routers } from './Routes/Routers';

function App() {
  return (
    <div className="App">
       <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
