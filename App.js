function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 AI Development Platform</h1>
        <p>Welcome to your AI-powered development environment!</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <p>Ask Claude AI to help you build amazing React components!</p>
      </header>
    </div>
  );
}