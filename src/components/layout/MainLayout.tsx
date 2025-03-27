
import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

const { Header, Content} = Layout;

const MainLayout = () => {

    const dispatch = useAppDispatch() ;

    const handleLogout = () => {
        dispatch(logout()) ;
    }

    return (
        <div>
            <Layout style={{height : "100vh"}}>

                <Sidebar/>

                <Layout>

                    <Header style={{ padding: 0 }} className='flex justify-end items-center'>
                        <Button className='mr-5' onClick={handleLogout}>Logout</Button>
                    </Header>

                    <Content style={{ margin: '24px 16px 0' }}>

                        <div style={{ padding: 24, minHeight: 360 }}>
                            <Outlet />
                        </div>

                    </Content>

                </Layout>

            </Layout>
        </div>
    );
};

export default MainLayout;
