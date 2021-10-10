import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default App;
