import "./App.css";
import Review from "./components/Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h3>Our Review</h3>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
