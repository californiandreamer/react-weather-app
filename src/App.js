import React from "react";
import cls from "./App.module.css";
import ThemeContext from './store/ThemeState/ThemeContext'
import classNames from 'classnames'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Sidebar from './components/Sidebar/Sidebar'
import Themes from './containers/Themes/Themes'
import Auth from './containers/Auth/Auth'
import Settings from './containers/Settings/Settings'
import Speedmeter from './containers/Speedmeter/Speedmeter'
import Account from './containers/Acconunt/Account'
import ThemeState from "./store/ThemeState/ThemeState";


function App() {
  const themeValue = ThemeState()

  return (
     <ThemeContext.Provider value={themeValue}>
      <div className={classNames({[cls.main__theme]: themeValue.themeState === "main", 
                                  [cls.city__theme]: themeValue.themeState === "city", 
                                  [cls.cherry__theme]: themeValue.themeState === "cherry",
                                  [cls.vine__theme]: themeValue.themeState === "vine",
                                  [cls.dark__theme]: themeValue.themeState === "dark",
                                  [cls.purple__theme]: themeValue.themeState === "purple",
                                  [cls.mountains__theme]: themeValue.themeState === "mountains"
                                })}>
        <div className={cls.container__inner}>
            <BrowserRouter history={{}}>
              <Switch>
                <Route path="/" component={Layout} exact />
                <Route path="/sidebar" component={Sidebar} />
                <Route path="/themes" component={Themes} />
                <Route path="/auth" component={Auth} />
                <Route path="/speedmeter" component={Speedmeter} />
                <Route path="/settings" component={Settings} />
                <Route path="/account" component={Account} />
              </Switch>
            </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
