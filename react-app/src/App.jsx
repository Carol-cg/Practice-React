import "./App.css";

import Welcome from "./components/Welcome";
import UserCard2 from "./components/UserCard2";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="card">
      <Welcome />

      <Counter />

      <UserCard2
        name="Carol"
        role="Student"
        email="carol@email.com"
        location="Phoenix"
      />

      <UserCard2
        name="luis"
        role="Developer"
        email="luis@email.com"
        location="New York"
      />

      <UserCard2
        name="Caleb"
        role="Designer"
        email="caleb@email.com"
        location="Los Angeles"
      />
    </div>
  );
}

export default App;

