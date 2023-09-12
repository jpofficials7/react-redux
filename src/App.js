function App() {
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using the React and Redux</h4>
        <div>
          <a title="decrement">-</a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value="0"
          />
          <a title="increment">+</a>
        </div>
      </div>
    </>
  );
}

export default App;
