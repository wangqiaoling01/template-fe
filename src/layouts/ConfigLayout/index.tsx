import React, { FC } from 'react';
import styles from './index.module.scss';
import { Outlet } from 'react-router-dom';

const ConfigLayout: FC = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default ConfigLayout;
