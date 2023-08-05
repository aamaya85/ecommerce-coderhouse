import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { menuRoutes } from './menuRoutes'
import { NotFound } from "./../pages/notFound/NotFound"
import Layout from "./../layout/Layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {
            menuRoutes.map( ({ id, path, Element }) => {
                return <Route key={id} path={path} element={<Element />} />
            })
        }
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes