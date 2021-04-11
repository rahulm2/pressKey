import { Switch, Route, BrowserRouter } from "react-router-dom";
import PressKeyScreen from "./Views/PressKeyScreen.js";
import "./App.css";
import "./Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PressKeyScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
