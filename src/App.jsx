import Rotex from "./component/Rotex"
import { Routes, Route,} from "react-router-dom"
import Main from "./component/themain"
import { useState } from "react"
import { app } from "./component/firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import Forget from "./component/forget"
import PaystackPayment from "./component/paystack"
import { Firestore } from "firebase/firestore"
import Setting from "./component/settings"



function App() {
let auth = getAuth();

let navigate = useNavigate();

 let [allData, setAllData] = useState({
  firstName: "",
  surName: "",
  userName: "",
  email: "",
  telNumber: "",
  Password: "",
 })

 function net(event) {
  event.preventDefault();
  navigate("themain");
}
function settings(event) {
  event.preventDefault();
  navigate("Setting");
}
function getData(event){
  setAllData((prev)=>{
    return{
      ...prev,
      [event.target.name]:event.target.value,
    }
  })
}
function go (event) {
  event.preventDefault();
  navigate("themain")
}

function fun (event) {
  event.preventDefault();
  navigate("forget");
}


function submitLogin(event){
 event.preventDefault();
 createUserWithEmailAndPassword(auth, allData.email, allData.password)
 
  .then(()=> {
    alert("successfully SignUp")
    navigate("themain")
  })
  .catch((error)=> {
    alert(error.message)
  })
  
  
}




function loginData(event){
  event.preventDefault();
  signInWithEmailAndPassword(auth, allData.email, allData.password)
  .then(()=> {
    alert("login successfully")
    navigate("themain")
  })
  .catch((error)=> {
    alert(error.message)
  })
}

function Forgot(event) {
event.preventDefault();

  const handleResetPassword = async () => {
     if (!allData.email) {
      alert("Enter your email first!");
      return;
     }

     try {
      await sendPasswordResetEmail(auth, allData.email);
      alert("We have sent you a recovery email!");
      navigate("..")
     } catch (error) {
      alert(error.message);
     }
  }

  setTimeout(()=> {
    handleResetPassword();
  }, 100)
}

  return (
    <div>
    <div>
    
   
    </div>
      <Routes>
        <Route index element={<Rotex getData={getData} firstName={allData.firstName} surName={allData.surName} userName={allData.userName} email={allData.email} telNumber={allData.telNumber} Password={allData.Password}  submitLogin={submitLogin} loginData={loginData} fun={fun}/>}/>
        <Route path="themain" element={<Main getData={getData} email={allData.email} userName={allData.userName} settings={settings}/>}/>
        <Route path="forget" element={<Forget getData={getData} email={allData.email} Forgot={Forgot}/>}/>
        <Route path="setting" element={<Setting go={go} fun={fun}/>}/>
      </Routes>
    </div>
  )
}

export default App
