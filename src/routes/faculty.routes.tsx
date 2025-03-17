
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import DashBoard from "@/pages/admin/DashBoard";

export const facultyPaths = [
    {
        index : true ,
        element : <DashBoard />
    },
    {
        path : 'dashboard' ,
        element : <DashBoard />
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
