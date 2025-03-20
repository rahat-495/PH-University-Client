
import { adminSidebarItems } from '@/routes/admin.routes';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;


const MainLayout = () => {
    return (
        <div>
            <Layout style={{height : "100vh"}}>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
                </Sider>
                <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                    }}
                    >
                    <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainLayout;
