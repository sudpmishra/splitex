import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import ComponentsExamples from './Pages/ComponentsExamples/ComponentsExamples';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';

function App() {
    const auth_token = localStorage.getItem("auth_token")
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/" element={auth_token?<Dashboard />:<Login/>} />
                <Route path="/components" element={<ComponentsExamples />} />
                <Route path="/reset-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;