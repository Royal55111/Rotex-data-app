function Setting(prop) {
  return (
    <div>
      <div className="set">
       <i className="bi-arrow-left"onClick={prop.go}></i>
       <p>Settings</p>
      </div>
      <div className="set1">
        <div className="set1-1">
          <p>Dark Mode</p>
        </div>
        <div className="set1-2">
           <p>Delete Account</p>
        </div>
        <div className="set1-3">
           <p>Change Password</p>
        </div>
        <div className="set1-4">
           <button>Log out</button>
        </div>
      </div>
    </div>
  );
}
export default Setting