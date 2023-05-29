import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
