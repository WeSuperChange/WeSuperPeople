// import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Letsgo } from "./pages/Letsgo";
import { Contact } from "./pages/Contact";
import ContactThanks from "./pages/ContactThanks";
import { NewPoll } from "./pages/NewPoll";
import { OwnPoll } from "./pages/OwnPoll";
import Question from "./pages/Question"
import { PollThanks } from "./pages/PollThanks";
import Results from "./pages/Results";
import { HomePoll } from "./pages/HomePoll";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/letsgo">
                    <Letsgo />
                </Route>

                <Route path="/contact" exact>
                    <Contact />
                </Route>

                <Route path="/contact_thanks">
                    <ContactThanks />
                </Route>

                <Route path="/home_poll">
                    <HomePoll />
                </Route>

                <Route path="/new_poll">
                    <NewPoll />
                </Route>

                <Route path="/own_poll">
                    <OwnPoll />
                </Route>

                <Route path="/question">
                    <Question />
                </Route>

                <Route path="/poll_thanks">
                    <PollThanks />
                </Route>

                <Route path="/Results">
                    <Results />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
