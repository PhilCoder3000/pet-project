import React, { lazy, useState } from 'react';
import { Link, RouterProvider } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { router } from '../pages';
import { classNames } from '../shared/classNames/classNames';
import { SuspenseAppProvider } from './providers/suspense/SuspenseProviders';
// import './styles/index.scss';
import './styles/index.css'

interface AppProps {
  uuid?: string;
}

export function App({ uuid }: AppProps) {
  return (
    <SuspenseAppProvider>
      <RouterProvider router={router} />
    </SuspenseAppProvider>
  );
}
