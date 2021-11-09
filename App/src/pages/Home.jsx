import React from "react";
import PollCollection from "../components/PollCollection";
import ContactSidebar from "../components/ContactSidebar";

const Home = () => {
    return (
        <div>
            <ContactSidebar />
            <section>
                <h1>We Super People -</h1>
                <h2>Digitalisierungsinitiative für private Umfragen.</h2>
                <p>Opensource für Privatpersonen zum Gedankenaustausch.</p>
            </section>
            <input type="button" value="Login in"></input>
            <input type="button" value="Los geht's"></input>
            <PollCollection />
        </div>
    );
};

export default Home;
