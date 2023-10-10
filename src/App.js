import { auth } from "./config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Layout from "./compenents/Layout";

import "./App.css";

const App = () => {
  const [user] = useAuthState(auth);

  return <Layout>{user ? <Quiz /> : <Login />}</Layout>;
};

export default App;
