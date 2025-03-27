
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import AdminDashBoard from "./AdminDashBoard";
import AcademicSemester from "@/pages/admin/academicManagement/AcademicSemester";

export const adminPaths = [
    {
        name : "Dashboard" ,
        path : "/admin/dashboard" ,
        element : <AdminDashBoard />
    },
    {
        name : "Academic Management" ,
        children : [
            {
                name : "Academic Semester" ,
                path : "/admin/academic-semester" ,
                element : <AcademicSemester />
            },
        ]
        
    },
    {
        name : "User Management" ,
        children : [
            {
                name : "Create Admin" ,
                path : "/admin/create-admin" ,
                element : <CreateAdmin />
            },
            {
                name : "Create Faculty" ,
                path : "/admin/create-faculty" ,
                element : <CreateFaculty />
            },
            {
                name : "Create Student" ,
                path : "/admin/create-student" ,
                element : <CreateStudent />
            },
        ]
    }
]
