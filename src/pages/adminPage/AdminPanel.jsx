import { useState } from "react";

import "./adminPanel.css";
import LeftDrawer from "./LeftDrawer.jsx";
import ViewUsers from "./viewUsers/ViewUsers.jsx"


export default function ProflePage() {
    const logOut = () => {
        console.log("logging out")
        sessionStorage.clear()
        
        window.location.href = '/';
    }
    const [activePanel, setActivePanel] = useState('viewUsers');

    const pageSelector = () => {
        switch(activePanel) {
            default:
                return <ViewUsers />
            case "viewUsers":
                return <ViewUsers />
            case "editUsers":
                return "editUsers"
            case "payments":
                return "payments"
        }
    }
    
    return (
        <div className="profile">
            <div className="profile-content">
                <section>
                    {/* <LeftPanel setActivePanel= {setActivePanel} /> */}
                    {pageSelector()}
                    <LeftDrawer setActivePanel={setActivePanel} />
                </section>

            </div>
        </div>
    )
}