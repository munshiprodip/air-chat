import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Container from "./components/Container/Container";
import { CheckLogin, PrivateRoute } from "./firebase/firebaseAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const dispatch = useDispatch();

  return (
    <Router>
      <Container>
        <AppWrapper>
          <CheckLogin>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
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
