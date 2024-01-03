import { FC } from 'react';
import styles from '../list.module.scss';
import ListSearch from '@/components/ListSearch';
import { Button, Pagination, Space, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const data = [{ name: '标题' }];

const ComponentList: FC = () => {
    const columns = [
        { title: '组件名称', key: 'name' },
        { title: '组件状态', key: 'status' },
        {
            title: '操作',
            key: 'operate',
            render: () => (
                <Space>
                    <Button type="dashed" size="small">
                        修改
                    </Button>
                    <Button type="dashed" size="small">
                        删除
                    </Button>
                    <Button type="dashed" size="small">
                        预览
                    </Button>
                </Space>
            ),
        },
    ].map(item => ({ ...item, dataIndex: item.key }));

    return (
        <>
            <div className={styles.header}>
                <Space>
                    <ListSearch />
                    <Button type="dashed" icon={<PlusOutlined />}>
                        去新增组件
                    </Button>
                </Space>
            </div>
            <div className={styles.main}>
                <Table dataSource={data} rowKey={'id'} columns={columns} pagination={false} />
            </div>
            <div className={styles.footer}>
                <Pagination />
            </div>
        </>
    );
};

export default ComponentList;
