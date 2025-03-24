
import { adminPaths } from '@/routes/admin.routes';
import { facultyPaths } from '@/routes/faculty.routes';
import { studentPaths } from '@/routes/student.routes';
import { sidebarItemsGenarator } from '@/utils/sidebarItemsGenarator';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

const userRole = {
    ADMIN : "admin" ,
    FACULTY : "faculty" ,
    STUDENT : "student" ,
}

const Sidebar = () => {
    
    const role = "admin" ;
    let sidebarItems ;

    switch (role) {
        case userRole?.ADMIN :
            sidebarItems = sidebarItemsGenarator(adminPaths) ;
            break;
        case userRole?.FACULTY :
            sidebarItems = sidebarItemsGenarator(facultyPaths) ;
            break;
        case userRole?.STUDENT :
            sidebarItems = sidebarItemsGenarator(studentPaths) ;
            break;
    
        default:
            break;
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
            <div className="demo-logo-vertical h-16 flex items-center justify-center">
                <h1 className="text-white gro font-semibold text-lg">PH - University</h1>    
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;

