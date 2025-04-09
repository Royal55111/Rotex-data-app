import Rotex from "./component/Rotex"
import { Routes, Route,} from "react-router-dom"
import Main from "./component/themain"
import { useState, useEffect } from "react"
import { app } from "./component/firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, deleteUser } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import Forget from "./component/forget"
import { Firestore } from "firebase/firestore"
import Setting from "./component/settings"

import { addDoc, collection, getDocs } from "firebase/firestore";



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
 
 useEffect(() => {
  fetch("/api/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: "user@example.com", amount: 1000 })
  })
    .then(res => res.json())
    .then(data => console.log("Paystack Init:", data))
    .catch(err => console.error("Error:", err));
}, []);


 const saveName = async (e) => {
   e.preventDefault();
   if (!allData.userName.trim()) return;

   await addDoc(collection(db, "users"), {
     name: allData.userName,
     createdAt: new Date()
   });
   fetchNames(); 
 };

 const fetchNames = async () => {
   const querySnapshot = await getDocs(collection(db, "users"));
   const names = [];
   querySnapshot.forEach((doc) => {
     names.push(doc.data().name);
   });

 };

 useEffect(() => {
   fetchNames();
 }, []);


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

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");

      // Listen immediately after logout
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate("..", { replace: true }); // Prevent back navigation
        }
      });
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });
};

const handleDelete = () => {
  const user = auth.currentUser;

  if (user) {
    if (window.confirm("Are you sure you want to delete your account permanently?")) {
      deleteUser(user)
        .then(() => {
          console.log("User account deleted");
          navigate("..", { replace: true }); // Or wherever you want
        })
        .catch((error) => {
          if (error.code === 'auth/requires-recent-login') {
            alert("Please log in again to delete your account.");
            navigate("/login");
          } else {
            console.error("Account deletion error:", error);
          }
        });
    }
  } else {
    console.log("No user signed in.");
  }
};

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

const [theme,setTheme] = useState(false)

function changeTheme(){
  setTheme((prev)=> {
    return !prev;
  }
)
}

const themeStyle = {
  backgroundColor: theme ? " rgb(54, 54, 66)":"rgb(174, 174, 236)",
}

  return (
    <div className="theme" style={themeStyle}>
      <Routes>
        <Route index element={<Rotex getData={getData} firstName={allData.firstName} surName={allData.surName} userName={allData.userName} email={allData.email} telNumber={allData.telNumber} Password={allData.Password}  submitLogin={submitLogin} loginData={loginData} fun={fun}/>}/>
        <Route path="themain" element={<Main getData={getData} email={allData.email} userName={allData.userName} settings={settings} saveName={saveName}/>}/>
        <Route path="forget" element={<Forget getData={getData} email={allData.email} Forgot={Forgot}/>}/>
        <Route path="setting" element={<Setting go={go} fun={fun} changeTheme={changeTheme} theme={theme} handleLogout={handleLogout} handleDelete={handleDelete}/>}/>
      </Routes>
    </div>
  )
}

export default App
