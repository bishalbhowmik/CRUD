import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path:'/create',
      element: <Create></Create>
    },
    {
      path:'/read/:id',
      element: <Read></Read>
    },
    {
      path:'/edit/:id',
      element: <Update></Update>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
        </div>
  );
}

export default App;
