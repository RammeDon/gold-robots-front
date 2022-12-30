import LeftPanel from "./LeftPanel.jsx";
import { useState } from "react";

import "./adminPanel.css";


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
                return "viewUsers"
            case "viewUsers":
                return "viewUsers"
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
                    <LeftPanel setActivePanel= {setActivePanel} />
                    {pageSelector()}
                </section>

            </div>
        </div>
    )
}