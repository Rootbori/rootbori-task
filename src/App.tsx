import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './service/routes'

interface AppProps {
    name: string;
}

const App: React.FC<AppProps> = ({ name }) => {
    return <Router>
        <Routes/>
    </Router>
}

export default App
