import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;