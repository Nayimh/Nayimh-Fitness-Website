
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Header from './pages/shared/header/Header';

import Footer from './pages/shared/footer/Footer';

import AboutUs from './pages/aboutus/AboutUs';
import Login from './pages/Login/Login/Login';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './pages/notFound/NotFound';
import Booking from './pages/Booking/Booking';
import Register from './pages/Login/Signup/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import DietPlan from './pages/DietPlan/DietPlan';
import Experts from './pages/experts/Experts';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
        
          </Route>
          <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
          </PrivateRoute>
            <Route path="/experts">
              <Experts></Experts>
          </Route>
          <PrivateRoute path="/aboutus">
            <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
         
          <Route exact path="/">
            <Home></Home>
            </Route>
            <PrivateRoute path="/tips">
            <DietPlan></DietPlan>
            </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
