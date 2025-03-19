
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import AdminDashBoard from "./AdminDashBoard";

export const facultyPaths = [
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
