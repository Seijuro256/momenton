import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listEmployees } from './graphql/queries';
import { createEmployee as createEmployeeMutation, deleteEmployee as deleteEmployeeMutation } from './graphql/mutations';

const initialFormState = { id: '', name: '' }

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    const apiData = await API.graphql({ query: listEmployees });
    setEmployees(apiData.data.listEmployees.items);
  }

  async function createEmployee() {
    if (!formData.id || !formData.name) return;
    await API.graphql({ query: createEmployeeMutation, variables: { input: formData } });
    setEmployees([ ...employees, formData ]);
    setFormData(initialFormState);
  }

  async function deleteEmployee({ id }) {
    const newEmployeesArray = employees.filter(employee => employee.id !== id);
    setEmployees(newEmployeesArray);
    await API.graphql({ query: deleteEmployeeMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Employees App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'id': e.target.value})}
        placeholder="Employee ID"
        value={formData.id}
      />
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Employee Name"
        value={formData.name}
      />
      <button onClick={createEmployee}>Create Employee</button>
      <div style={{marginBottom: 30}}>
        {
          employees.map(employee => (
            <div key={employee.id || employee.name}>
              <h2>{employee.name}</h2>
              <p>{employee.id}</p>
              <button onClick={() => deleteEmployee(employee)}>Delete employee</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
