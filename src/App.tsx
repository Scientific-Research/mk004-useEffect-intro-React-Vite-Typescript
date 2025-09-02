import { useEffect, useState } from 'react';
import './App.css';

const employeeUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

interface Employee {
  employeeID: number;
  firstName: string;
  lastName: string;
  title: string;
}

function App() {
  const [fetchData, setFetchData] = useState<Employee[]>([]);

  // const fetchEmployeeData = async () => { Das führt dazu, dass die Funktion bei jedem Render erneut ausgeführt wird — also eine Endlosschleife von Fetches!

  // useEffect(() => {}, []) sorgt dafür, dass der Fetch nur einmal beim Laden ausgeführt wird.
  useEffect(() => {
    const fetchEmployeeData = async () => {
      const response = await fetch(employeeUrl);
      const data = await response.json();
      setFetchData(data);
      console.log(fetchData);
    };
    fetchEmployeeData();
  }, []);

  return (
    <div className="App">
      <h1>useEffect-Intro-React-Vite-Typescript</h1>
      <div className="employees">
        {fetchData.map((employee) => (
          <div className="employee">
            <p key={employee.employeeID} className="firstAndLastName">
              {employee.firstName} {employee.lastName}
            </p>
            <p className="title">{employee.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
