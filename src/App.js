import Header from './components/Header';
import './App.css';
import Login from './components/Login';
import { SessionProvider } from "next-auth/react"
import { getSession, useSession } from 'next-auth/react'

function App() {
const {session} = getSession()

  return (
    <div className="App">
      <SessionProvider session={session}>
        <Header/>
      </SessionProvider>
    </div>
  );
}


export default App;
