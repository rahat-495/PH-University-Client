
import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import { routesGenarator } from "@/utils/routesGenarator";

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <App /> ,
    },
    {
        path : '/admin' ,
        element : <App /> ,
        children : routesGenarator(adminPaths) ,
    },
    {
        path : '/faculty' ,
        element : <App /> ,
        children : routesGenarator(facultyPaths) ,
    },
    {
        path : '/student' ,
        element : <App /> ,
        children : routesGenarator(studentPaths) ,
    },
    {
        path : '/login' ,
        element : <Login /> ,
    },
    {
        path : '/register' ,
        element : <Register /> ,
    }
])

export default router ;
