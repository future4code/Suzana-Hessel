import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage  from './pages/home/home';
import DetailsPage  from './pages/details/details';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/details/:name'>
                    <DetailsPage/>
                </Route>
                <Route path='/'>
                    <HomePage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router