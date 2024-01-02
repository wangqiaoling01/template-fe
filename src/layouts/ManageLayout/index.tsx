import React, { FC } from 'react';
import styles from './index.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Space, Layout } from 'antd';
import { AppstoreOutlined, ClusterOutlined, BarsOutlined } from '@ant-design/icons';
import { COMPONENT_LIST_PATHNAME, LEMMA_LIST_PATHNAME, TEMPLATE_LIST_PATHNAME } from '../../router';

const { Sider } = Layout;
const ManageLayout: FC = () => {
    const nav = useNavigate();

    const { pathname } = useLocation();

    return (
        <Layout className={styles.container}>
            <Sider className={styles.left}>
                <Space direction="vertical" align="center" style={{ width: '100%' }}>
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
                </Space>
            </Sider>
            <div className={styles.right}>
                <Outlet />
            </div>
        </Layout>
    );
};

export default ManageLayout;
