
import './styles/App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Quiz } from './component/Quiz';
import { Result } from './component/Result';
import { Main } from './component/Main';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>
  },
  {
    path:"/quiz",
    element:<Quiz></Quiz>
  },
  {
    path:"/result",
    element:<Result></Result>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
