import react from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import AppUsers from './Users/AppUsers';
import AppHome from "./Home/AppHome";


function MyRoute(){

return(

<BrowserRouter>
<Routes>
<Route  path="/" element={<AppHome/>}> </Route>
<Route  path="/Users" element={<AppUsers/>}> </Route>
</Routes>

</BrowserRouter>
);
}
export default MyRoute
