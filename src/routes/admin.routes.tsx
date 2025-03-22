
import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import AdminDashBoard from "./AdminDashBoard";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarItem = { key : string; label : ReactNode; children ?: TSidebarItem[] } ;

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

export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItem[] , item) => {
    if(item.path && item.name){
        acc.push({
            key : item.name ,
            label : <NavLink to={`${item.path}`}>{item.name}</NavLink> ,
        })
    }
    
    if(item.children){
        acc.push({
            key : item.name ,
            label : item.name ,
            children : item.children.map(child => ({
                key : child.name ,
                label : <NavLink to={`${child.path}`}>{child.name}</NavLink> ,
            }))
        })
    }
    console.log(acc);

    return acc
} , [])

