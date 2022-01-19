import { Routes, Route, useMatch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import NotFound from '../../components/NotFound';

function Photo() {

    const match = useMatch();

    return (
        <Routes>
            {/* <Route exact path={match.url} component={MainPage} /> */}
            <Route exact path="/photos" element={<MainPage/>} />
            <Route path={`${match.url}/add`} component={AddEditPage}/>
            <Route path={`${match.url}/:photoId`} component={AddEditPage}/>
            <Route component={NotFound}/>
        </Routes>
    );
}

export default Photo;