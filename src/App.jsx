import { BrowserRouter as Router, Switch } from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import CheckLogin from "./components/CheckLogin/CheckLogin";
import Container from "./components/Container/Container";
import { GuestRoute, PrivateRoute } from "./lib/helpers/routeHelper";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/Login/LoginForm";
import Register from "./pages/Register/Register";

export const socketIo = io("/");
function App() {
  return (
    <Router>
      <Container>
        <AppWrapper>
          <CheckLogin>
            <Switch>
              <GuestRoute path="/login">
                <LoginForm />
              </GuestRoute>
              <GuestRoute path="/register">
                <Register />
              </GuestRoute>
              <PrivateRoute path="/">
                <Home />
              </PrivateRoute>
            </Switch>
          </CheckLogin>
        </AppWrapper>
      </Container>
    </Router>
  );
}

export default App;
