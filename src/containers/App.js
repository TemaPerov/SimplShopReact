import { Switch, Route,HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import routesConfig from "../routs/RoutesConfig";

function App() {
  return (
    <div className="box">
      <HashRouter basename="/">
      <Header />
        <Switch>
          {routesConfig.map((route,i)=>(
            <Route
            key={i}
            path= {route.path}
            exact={route.exact}
            component={route.component}
            />
          ))}
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
