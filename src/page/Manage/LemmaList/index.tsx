import { FC } from 'react';
import styles from '../list.module.scss';
import ListSearch from '@/components/ListSearch';

const LemmaList: FC = () => {
    return (
        <>
            <div className={styles.header}>
                <ListSearch />
            </div>
            <div className={styles.main}>list</div>
            <div className={styles.footer}></div>
        </>
    );
};

export default LemmaList;
