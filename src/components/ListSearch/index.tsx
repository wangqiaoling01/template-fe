import { FC, useEffect, useState } from 'react';
import { Input, Select, Space } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { LIST_SEARCH_PARAM_NAME_KEY, LIST_SEARCH_PARAM_STATUS_KEY } from '@/constant';
import { getObjectString } from '@/utils/common';
const ListSearch: FC = () => {
    const nav = useNavigate();
    const { pathname } = useLocation();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const nameVal = searchParams.get(LIST_SEARCH_PARAM_NAME_KEY) || '';
        setName(nameVal);

        const statusVal = searchParams.get(LIST_SEARCH_PARAM_STATUS_KEY) || '';
        setStatus(statusVal);
    }, [searchParams]);

    const onSearch = (value: string) => {
        triggerSearch({ status, name: value });
    };

    const onChange = (value: string) => {
        triggerSearch({ status: value, name });
    };

    const triggerSearch = (params: { status?: string; name?: string }) => {
        nav({
            pathname,
            search: getObjectString(params),
        });
    };

    return (
        <Space direction="horizontal">
            <Input.Search
                size="large"
                placeholder="请输入关键词"
                value={name}
                onSearch={onSearch}
                style={{ width: 300 }}
            />
            <Select
                placeholder="请选择状态"
                options={[
                    { label: '已上线', value: '1' },
                    { label: '已下线', value: '0' },
                ]}
                style={{ width: 200 }}
                value={status}
                defaultValue={status}
                size="large"
                onChange={onChange}
            />
        </Space>
    );
};

export default ListSearch;
