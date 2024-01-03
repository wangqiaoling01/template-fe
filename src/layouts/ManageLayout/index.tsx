import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    ClusterOutlined,
    BarsOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { COMPONENT_LIST_PATHNAME, LEMMA_LIST_PATHNAME, TEMPLATE_LIST_PATHNAME } from '../../router';
const MENU_MAP = {
    component: COMPONENT_LIST_PATHNAME,
    template: TEMPLATE_LIST_PATHNAME,
    lemma: LEMMA_LIST_PATHNAME,
};
type menuType = 'component' | 'template' | 'lemma';

const { Sider } = Layout;
const ManageLayout: FC = () => {
    const nav = useNavigate();

    const { pathname } = useLocation();

    const [collapsed, setCollapsed] = useState(false);

    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    const onClick = ({ key }: { key: string }) => {
        if (key === 'fold') {
            setCollapsed(!collapsed);
            setSelectedKeys([]);
            return;
        }

        setSelectedKeys([key]);
        nav(MENU_MAP[key as menuType]);
    };

    useEffect(() => {
        let result = '';
        if (pathname.startsWith(COMPONENT_LIST_PATHNAME)) {
            result = 'component';
        } else if (pathname.startsWith(TEMPLATE_LIST_PATHNAME)) {
            result = 'template';
        } else if (pathname.startsWith(LEMMA_LIST_PATHNAME)) {
            result = 'lemma';
        }
        setSelectedKeys([result]);
    }, [pathname]);

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
                <Menu
                    className={styles.menu}
                    mode="inline"
                    items={[
                        {
                            key: 'fold',
                            icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
                        },
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
                    onClick={onClick}
                    selectedKeys={selectedKeys}
                />
            </Sider>
            <div className={styles.right}>
                <Outlet />
            </div>
        </Layout>
    );
};

export default ManageLayout;
