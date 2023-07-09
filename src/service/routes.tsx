import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../pages/login'
import Boards from '../pages/boards'
import Task from '../pages/task'
import NotFound from '../pages/notFound'

const AppRoutes: React.FC = () => {
    return <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/boards" element={<Boards/>}/>
        <Route path="/task/:id" element={<Task/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
}

export default AppRoutes
