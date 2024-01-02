import { FC } from 'react';
import styles from './index.module.scss';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content, Header, Footer } = Layout;

const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className={styles.header}>header</Header>
            <Content className={styles.main}>
                <Outlet />
            </Content>
            <Footer className={styles.footer}>
                xx &copy; 2024 - present. Created by wangqiaoqiao
            </Footer>
        </Layout>
    );
};

export default MainLayout;
