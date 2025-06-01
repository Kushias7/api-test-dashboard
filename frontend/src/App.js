import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          import React, { useState, useEffect } from 'react';

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/test_results')
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(err => console.error(err));
  }, []);

  const runTests = () => {
    setLoading(true);
    fetch('http://localhost:5000/run_tests', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        alert('Tests completed!');
        setLoading(false);
        fetch('http://localhost:5000/test_results')
          .then(res => res.json())
          .then(data => setResults(data))
          .catch(err => console.error(err));
      })
      .catch(err => {
        alert('Error running tests');
        setLoading(false);
      });
  };

  if (!results) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>API Test Automation Dashboard</h1>
      <button onClick={runTests} disabled={loading}>
        {loading ? 'Running...' : 'Run Tests'}
      </button>
      <div style={{ marginTop: 20 }}>
        <h3>Test Results</h3>
        <p>Pass: {results.pass}</p>
        <p>Fail: {results.fail}</p>
        <p>Coverage: {results.coverage}%</p>
        <p>Avg Response Time: {results.avg_response_time}ms</p>
        <p>Last Updated: {results.timestamp}</p>
      </div>
    </div>
  );
}

export default App;

