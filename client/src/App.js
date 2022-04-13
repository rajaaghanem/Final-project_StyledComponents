import React, {useState} from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import UserProfile from "./pages/userProfile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import CategoriesPage from "./pages/categoriesPage/CategoriesPage";
import ChooseButtonPage from "./pages/buttonsPages/chooseButtonPage/ChooseButtonPage";
import RoundButtonPage from "./pages/buttonsPages/roundButtonPage/RoundButtonPage";
import UserButtonsGenerate from "./pages/userButtonsGenerate/UserButtonsGenerate";
import ChooseCardPage from "./pages/cardsPages/chooseCardPage/ChooseCardPage";
import NormalCardPage from "./pages/cardsPages/normalCardPage/NormalCardPage";
import Offsetbutton from "./pages/buttonsPages/offsetButton/Offsetbutton";
import DoubleButton from "./pages/buttonsPages/doubleButton/DoubleButton";
import GrooveButton from "./pages/buttonsPages/grooveButton/GrooveButton";
import NormalButtonPage from "./pages/buttonsPages/normalButtonpage/NormalButtonPage";
import WelcomePage from "./pages/welxomePage/WelcomePage";

function App() {
 const [userComponent, setUserComponent] = useState({});
 
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={WelcomePage}/>
              <Route path="/home-page" exact component={HomePage}/>   
              <Route path="/signup-page" exact component={Signup} />
              <Route path="/login-page" exact component={Login} />
              <Route path="/logout-page" exact component={Logout} />
              <Route path="/user-profile" exact>
                <UserProfile setUserComponent={setUserComponent}/>
              </Route>
              <Route path="/categories-page" exact component={CategoriesPage}/>
              <Route path="/normalButton-page" exact component={NormalButtonPage}/>
              <Route path="/chooseButton-page" exact component={ChooseButtonPage}/>
              <Route path="/chooseCard-page" exact component={ChooseCardPage}/>
              <Route path="/roundButton-page" exact component={RoundButtonPage}/>
              <Route path="/offsetButton-page" exact component={Offsetbutton}/>
              <Route path="/doubleButton-page" exact component={DoubleButton}/>
              <Route path="/grooveButton-page" exact component={GrooveButton}/>
              <Route path="/normalCard-page" exact component={NormalCardPage}/>           
              <Route path="/userButtonsGenerate-page" exact>
                <UserButtonsGenerate userComponent={userComponent}/>
              </Route>
              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
