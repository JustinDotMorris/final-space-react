import "./App.scss";
import "./assets/styles/_reset.scss";
import CardDisplay from "./containers/CardDisplay/CardDisplay";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
        <nav>
          <h1>Nav</h1>
        </nav>
      </header>
      <main>
        <h1>Main</h1>
        <section>
          <CardDisplay />
        </section>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default App;
