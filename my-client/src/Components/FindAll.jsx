import { useState } from "react";
import axios from "axios";
import './FindAll.css'; // Re-enable this

export function FindAll() {
  const [employees, setEmployees] = useState([]);

  async function findAllHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.get('https://my-project-backend-6tol.onrender.com/api/employees');
      setEmployees(response.data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="findall-container">
      <form onSubmit={findAllHandler} className="findall-form">
        <h2>Employee Records</h2>
        <hr />
        <button type="submit">Get All Records</button>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>No</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp._id}</td>
                  <td>{emp.empNo}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.empSal}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Record</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
