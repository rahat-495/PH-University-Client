
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import AdminDashBoard from "./AdminDashBoard";
import { ReactNode } from "react";

type TRoute = { path: string; element: ReactNode; } ;

export const adminPaths = [
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

export const adminRoutes = adminPaths.reduce((acc : TRoute[] , item) => {
    if(item.path && item.element){
        acc.push({
            path : item.path ,
            element : item.element ,
        })
    }
    
    if(item.children){
        item.children.forEach((child) => {
            acc.push({
                path : child.path ,
                element : child.element ,
            })
        })
    }

    return acc
} , [])
