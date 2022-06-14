import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  const [onlineState, setOnlineState] = useState(navigator.onLine);

  useEffect(() => {
    const showOffline = () => {
      setOnlineState(false);
    };
    const showOnline = () => {
      setOnlineState(true);
    };

    window.addEventListener("offline", showOffline);
    window.addEventListener("online", showOnline);

    return () => {
      window.removeEventListener("offline", showOffline);
      window.removeEventListener("online", showOnline);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <Body onlineState={onlineState} />
    </div>
  );
}

export default App;
