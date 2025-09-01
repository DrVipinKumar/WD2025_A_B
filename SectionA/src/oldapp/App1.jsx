// import './App.css'

function App() {
  let langs = [
    { id: 1, lang: "C" },
    { id: 2, lang: "C++" },
    { id: 3, lang: "Java" },
    { id: 4, lang: "JavaScript" },
    { id: 5, lang: "Python" },
    { id: 6, lang: "Dart" }
  ];
  return (
    <div>
      <h1>Welcome to React JS</h1>
      <ol>
        <h1>
          {langs.map((obj) => (
            <li key={obj.id}>{obj.lang}</li>
          ))}
        </h1>
      </ol>
    </div>
  );
}

export default App;
