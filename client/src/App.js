import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import "./App.css";
import EditorPage from "./components/editorpage/EditorPage";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Testaxios from "./components/testaxios/Testaxios";
import Tools from "./components/tools/Tools";
import ToolsPage from "./components/tools-page/ToolsPage";
import UserProfile from "./pages/userProfile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import CategoriesPage from "./pages/categoriesPage/CategoriesPage";
import GreenButtonPage from "./pages/buttonsPages/greenButtonpage/GreenButtonPage";
import ChooseButtonPage from "./pages/buttonsPages/chooseButtonPage/ChooseButtonPage";
import RoundButtonPage from "./pages/buttonsPages/roundButtonPage/RoundButtonPage";
import UserButtonsGenerate from "./pages/userButtonsGenerate/UserButtonsGenerate";
import ChooseCardPage from "./pages/cardsPages/chooseCardPage/ChooseCardPage";
import NormalCardPage from "./pages/cardsPages/normalCardPage/NormalCardPage";

function App() {
 

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/editor-page" exact component={EditorPage} />
              <Route path="/axios-page" exact component={Testaxios} />
              <Route path="/signup-page" exact component={Signup} />
              <Route path="/login-page" exact component={Login} />
              <Route path="/logout-page" exact component={Logout} />
              <Route path="/tools-page" exact component={Tools} />
              <Route path="/tools-container" exact component={ToolsPage} />
              <Route path="/user-profile" exact component={UserProfile}/>
              <Route path="/categories-page" exact component={CategoriesPage}/>
              <Route path="/greenButton-page" exact component={GreenButtonPage}/>
              <Route path="/chooseButton-page" exact component={ChooseButtonPage}/>
              <Route path="/chooseCard-page" exact component={ChooseCardPage}/>
              <Route path="/roundButton-page" exact component={RoundButtonPage}/>
              <Route path="/normalCard-page" exact component={NormalCardPage}/>
              <Route path="/userButtonsGenerate-page/:id/:type" exact component={UserButtonsGenerate}/>
              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
