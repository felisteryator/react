import { createContext, useState, useContext } from "react";

const NameContext = createContext(null);
export default function App2() {
  //create context
  const [name, setName] = useState("Allan");

  const newName = () => {
    setName("Lucy");
  };

  return (
    <NameContext.Provider value={name}>
      <h1>App Component</h1>
      <button onClick={newName}>Change name</button>
      <Dashboard />
    </NameContext.Provider>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard component</h2>
      <Navigation />
    </div>
  );
}
function Navigation() {
  return (
    <div>
      <h2>Nav component</h2>
      <UserProfile />
    </div>
  );
}

function UserProfile() {
  const name = useContext(NameContext);

  return (
    <div>
      <h4>UserProfile component</h4>
      <p>The current name is: {name}</p>
      <p>The new name is: {name}</p>
    </div>
  );
}
