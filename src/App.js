import './App.css';

function addName(name) {
  let nameList = document.getElementById("nameList");
  let li = document.createElement('li');
  li.textContent = name;
  nameList.appendChild(li);
}

function App() {
  return (
    <div className="App">
      <h1 className="header">Sign Up</h1>
      <input type="text" id="name" name="name" placeholder="Name..."></input>
      <button type="submit" onClick={() => {
        let inputBox = document.getElementById("name");
        addName(inputBox.value);
        inputBox.value = "";
      }}>Add</button>
      <ul id="nameList"></ul>
    </div>
  );
}

export default App;
