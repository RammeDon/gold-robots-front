import "./profilePage.css";


export default function ProflePage() {


    const logOut = () => {
        console.log("logging out")
        sessionStorage.clear()
        
        window.location.href = '/';
      }
    
    return (
        <div className="profile" onClick={() => {logOut()}}>
            <button>
                logout
            </button>
        </div>
    )
}