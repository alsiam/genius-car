import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Booking from "./pages/Booking/Booking";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import NotFounds from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Header from "./pages/Shared/Header/Header";

function App() {

  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/bookings/:bookingId'>
            <Booking></Booking>
          </PrivateRoute>
          <Route path='*'>
            <NotFounds></NotFounds>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
