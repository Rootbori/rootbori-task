import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

interface AppProps {
    name: string;
}

const Home: React.FC = () => {
    return <div>Home Page</div>
}

const About: React.FC = () => {
    return <div>About Page</div>
}

const NotFound: React.FC = () => {
    return <div>404 Not Found</div>
}

const App: React.FC<AppProps> = ({ name }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default App
