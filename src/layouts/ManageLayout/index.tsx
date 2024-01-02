import React, { FC } from 'react';
import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';

const ManageLayout: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>left</div>
            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageLayout;
