import "./leftPanel.css";


export default function LeftPanel(props) {

    const panelItems = [
        {
            title: "View Users",
            path: "viewUsers"
        },
        {
            title: "Edit Users",
            path: "editUsers"
        },
        {
            title: "Payments",
            path: "payments"
        }
    ]

    

    return( 
        <div className="leftPanel">
            {
                panelItems.map((item, i) => {
                    return(
                        <div
                        className="panel-item"
                        onClick={() => {props.setActivePanel(item.path)}}
                         tabIndex={i}>{item.title}
                         </div>
                    )

                })
            }

        </div>
    )
}
