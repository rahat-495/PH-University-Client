
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import AdminDashBoard from "./AdminDashBoard";

export const adminPathsMain = [
    {
        name : "Dashboard" ,
        path : "/admin/dashboard" ,
        element : <AdminDashBoard />
    },
    {
        name : "User Management" ,
        children : [
            {
                name : "Dashboard" ,
                path : "/admin/create-admin" ,
                element : <CreateAdmin />
            },
            {
                name : "Dashboard" ,
                path : "/admin/create-faculty" ,
                element : <CreateFaculty />
            },
            {
                name : "Dashboard" ,
                path : "/admin/create-student" ,
                element : <CreateStudent />
            },
        ]
    }
]

export const adminPaths = [
    {
        index : true ,
        element : <AdminDashBoard />
    },
    {
        path : 'dashboard' ,
        element : <AdminDashBoard />
    },
    {
        path : 'create-admin' ,
        element : <CreateAdmin />
    },
    {
        path : 'create-faculty' ,
        element : <CreateFaculty />
    },
    {
        path : 'create-student' ,
        element : <CreateStudent />
    },
]
