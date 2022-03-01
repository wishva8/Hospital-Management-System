import logo from './logo.svg';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import './App.css';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import Login from './Pages/Login/Login';
import NavigationBar from './Components/NavigationBar';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
