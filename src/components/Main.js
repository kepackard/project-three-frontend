import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index.js";
import Show from "../pages/Show.js";

function Main(props) {

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/plans/:id" render={(rp) => <Show {...rp} />} />
            </Switch>
        </main>
    );
  }
  
  export default Main;