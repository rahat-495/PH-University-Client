
import { adminPaths } from '@/routes/admin.routes';
import { sidebarItemsGenarator } from '@/utils/sidebarItemsGenarator';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

const Sidebar = () => {
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemsGenarator(adminPaths)} />
        </Sider>
    );
};

export default Sidebar;

