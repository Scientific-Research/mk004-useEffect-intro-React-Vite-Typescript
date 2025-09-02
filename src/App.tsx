import { useEffect, useState } from 'react';
import './App.css';

const employeeUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

interface Employees {
  employeeID: number;
  firstName: string;
  lastName: string;
  title: string;
}

function App() {
  const [employees, setEmployees] = useState<Employees[]>([]);

  // const fetchEmployeeData = async () => { Das führt dazu, dass die Funktion bei jedem Render erneut ausgeführt wird — also eine Endlosschleife von Fetches!

  // useEffect(() => {}, []) sorgt dafür, dass der Fetch nur einmal beim Laden ausgeführt wird.
  useEffect(() => {
    const fetchEmployeeData = async () => {
      const response = await fetch(employeeUrl);
      const data = await response.json();
      setEmployees(data);
      console.log(employees);
    };
    fetchEmployeeData();
  }, []);

  return (
    <div className="App">
      <h1>useEffect-Intro-React-Vite-Typescript</h1>
      <div className="employees">
        {employees.map((employees) => (
          <div className="employee" key={employees.employeeID}>
            <p className="firstAndLastName">
              {employees.firstName} {employees.lastName}
            </p>
            <p className="title">{employees.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
