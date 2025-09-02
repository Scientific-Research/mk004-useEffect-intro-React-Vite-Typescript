import './App.css';

const employeeUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

// using IIFE => Immediately Invoked Function Expression
// async () => {
//   const data = await fetch(employeeUrl);
//   console.log(data);
// };

const fetchEmployeeData = async () => {
  const data = await fetch(employeeUrl);
  const response = await data.json();
  console.log(response);
};

fetchEmployeeData();

function App() {
  return (
    <div className="App">
      <h1>useEffect-Intro-React-Vite-Typescript</h1>
    </div>
  );
}

export default App;
