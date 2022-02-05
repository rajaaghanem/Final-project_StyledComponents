import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import EditorPage from "./components/editorpage/EditorPage";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Testaxios from "./components/testaxios/Testaxios";
import Tools from "./components/tools/Tools";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/editor-page" exact component={EditorPage} />
              <Route path="/axios-page" exact component={Testaxios} />
              <Route path="/signup-page" exact component={Signup} />
              <Route path="/login-page" exact component={Login} />
              <Route path="/logout-page" exact component={Logout} />
              <Route path="/tools-page" exact component={Tools} />
              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
          {/* <div><Link to="/tools-page">tools</Link></div> */}
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
