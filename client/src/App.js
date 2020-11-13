import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerList from './views/PlayerList';
import {Router, Redirect, Link} from "@reach/router";
import AddPlayer from "./views/AddPlayer";
import PlayerStatus from './views/PlayerStatus';

function App() {
  return (
    <div className="App">
    <Link to="/players/list">List</Link> | <Link to="/players/add">Add player</Link> |
    <Link to="/status/game/1"> Manage Player Status</Link>
      <Router>
        <Redirect exact noThrow from="/" to="/players/list"/>
          <PlayerList path="/players/list" />
          <AddPlayer path="/players/add"/>
          <PlayerStatus path="/status/game/:id"/>
      </Router>
    </div>
  );
}

export default App;
