import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/page/Home';
import Login from '@/page/Login';
import Register from '@/page/Register';

import ManageLayout from '@/layouts/ManageLayout';
import LemmaList from '@/page/Manage/LemmaList';
import TemplateList from '@/page/Manage/TemplateList';
import ComponentList from '@/page/Manage/ComponentList';

import NotFound from '@/page/NotFound';

import ConfigLayout from '@/layouts/ConfigLayout';
import ComponentConfig from '@/page/Config/Component';
import TemplateConfig from '@/page/Config/Template';
import LemmaConfig from '@/page/Config/Lemma';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'manage',
                element: <ManageLayout />,
                children: [
                    {
                        path: 'lemma',
                        element: <LemmaList />,
                    },
                    {
                        path: 'template',
                        element: <TemplateList />,
                    },
                    {
                        path: 'component',
                        element: <ComponentList />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
    {
        path: 'config',
        element: <ConfigLayout />,
        children: [
            {
                path: 'component/:id',
                element: <ComponentConfig />,
            },
            {
                path: 'template/:id',
                element: <TemplateConfig />,
            },
            {
                path: 'lemma/:id',
                element: <LemmaConfig />,
            },
        ],
    },
]);
