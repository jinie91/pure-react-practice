import {BrowserRouter, Route, Switch} from "react-router-dom"
import Links from "./components/Links";
import Filter from "./pages/Filter";
import Gallery from "./pages/Gallery";
import Main from "./pages/Main";

function App() {
  return (  
     <BrowserRouter>
     <Links />
     <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/filter" component={Filter} />
      </Switch>
     </BrowserRouter>
  );
}

export default App;
