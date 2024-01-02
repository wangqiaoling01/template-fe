import { FC, useState } from 'react';
import styles from './index.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Space, Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    ClusterOutlined,
    BarsOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { COMPONENT_LIST_PATHNAME, LEMMA_LIST_PATHNAME, TEMPLATE_LIST_PATHNAME } from '../../router';

const { Sider } = Layout;
const ManageLayout: FC = () => {
    const nav = useNavigate();

    const { pathname } = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className={styles.container}>
            <Sider
                className={styles.left}
                collapsible
                theme="light"
                trigger={null}
                collapsed={collapsed}
                width={140}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        marginLeft: '23px',
                    }}
                />
                <Menu
                    mode="inline"
                    items={[
                        {
                            key: 'component',
                            icon: <AppstoreOutlined />,
                            label: '组件列表',
                        },
                        {
                            key: 'template',
                            icon: <ClusterOutlined />,
                            label: '模板列表',
                        },
                        {
                            key: 'lemma',
                            icon: <BarsOutlined />,
                            label: '词条列表',
                        },
                    ]}
                />
                {/* <Space
                    direction="vertical"
                    align="center"
                    style={{ width: '100%', backgroundColor: '#fff' }}
                >
                    <Button
                        type={pathname.startsWith(COMPONENT_LIST_PATHNAME) ? 'default' : 'text'}
                        size="large"
                        icon={<AppstoreOutlined />}
                        onClick={() => nav(COMPONENT_LIST_PATHNAME)}
                    >
                        组件列表
                    </Button>
                    <Button
                        type={pathname.startsWith(TEMPLATE_LIST_PATHNAME) ? 'default' : 'text'}
                        size="large"
                        icon={<ClusterOutlined />}
                        onClick={() => nav(TEMPLATE_LIST_PATHNAME)}
                    >
                        模板列表
                    </Button>
                    <Button
                        type={pathname.startsWith(LEMMA_LIST_PATHNAME) ? 'default' : 'text'}
                        size="large"
                        icon={<BarsOutlined />}
                        onClick={() => nav(LEMMA_LIST_PATHNAME)}
                    >
                        词条列表
                    </Button>
                </Space> */}
            </Sider>
            <div className={styles.right}>
                <Outlet />
            </div>
        </Layout>
    );
};

export default ManageLayout;
