import Login from "../login/login";
import Browse from "../Brow/Browse";
import Header from "../Header/Header";
import { Route,RouterProvider,Routes,createBrowserRouter } from "react-router-dom";
function Body(){
   
    const appRouter = createBrowserRouter([
        {path:"/", element:<Login />},
        {path:"/browse",element:<Browse />}
    ])
   return( 
       <div>
            <Header></Header>
            <RouterProvider router={appRouter} />
       </div>
  )
}
export default Body;