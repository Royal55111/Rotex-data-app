import { useState } from "react"

function Setting(prop) {
  const toggleStyle = {
    display: "flex",
    justifyContent: prop.theme ? "flex-end" : "flex-start",
  }

  const [toggle1,setToggle1] = useState(false)

function changeColor(){
  setToggle1((prev)=>{
    return !prev
   
  })
  prop.changeTheme()
}

const toggle1Style = {
  backgroundColor: toggle1 ? "blue":"white",
}
  return (
    <div>
      <div className="set">
       <i className="bi-arrow-left"onClick={prop.go}></i>
       <p>Settings</p>
      </div>
      <div className="set1">
        <div className="set1-1" onClick={changeColor}>
          <p>Dark Mode</p>
          <div className="toggle" style={toggleStyle}>
            <div className="toggle1" style={toggle1Style}>

            </div>
          </div>
        </div>
        <div className="set1-2" onClick={prop.handleDelete}>
           <p>Delete Account</p>
           <div className="bi-chevron-right"></div>
        </div>
        <div className="set1-3" onClick={prop.fun}>
           <p>Change Password</p>
           <div className="bi-chevron-right"></div>
        </div>
        <div className="set1-4" onClick={prop.handleLogout}>
           <button>Log out</button>
        </div>
      </div>
    </div>
  );
}
export default Setting