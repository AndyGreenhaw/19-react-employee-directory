import React from 'react';
import EmployeeCard from './components/EmployeeCard/employeeCard';
import Employees from './officeEmployees.json';
import SearchForm from './components/SearchForm/SearchForm.js'
import "./style.css";

class App extends React.Component {

  state = {
    employeeArr: Employees,
    // imageArray: [
    //   require()
    // ]
  }

  // HANDLE INPUT CHANGE
  handleInputChange = event => {
    const { value } = event.target
    console.log({value})
    this.setState({...this.state, query: value})
  }

  // SEE ALL EMPLOYEES
  seeAll = (e) => {
    e.preventDefault()
    this.setState({employeeArr: Employees})
  }

  // SORT BY DEPARTMENT
  sortDept = (e) => {
    e.preventDefault()
    const filteredArray = this.state.employeeArr.filter( employee => employee.department === this.state.query.toLowerCase());
    console.log(filteredArray)
    this.setState({employeeArr: filteredArray})
  }

  // DELETE (FIRE) FUNCTION
  deleteEmployee = (id) => {
    console.log(id);
    const filteredArray = this.state.employeeArr.filter( employee => employee.id !== id )
    console.log(filteredArray)
    this.setState({employeeArr: filteredArray})
  }

  render(){
    return (
      <div className="container">

        <div className="row">
          <div className="col-12">
            <h2>Employee Directory</h2>
              <SearchForm
                query={this.state.query}
                handleInputChange={this.handleInputChange}
                sortDept={this.sortDept}
                seeAll={this.seeAll}
              />
              <table className="center">
                <tbody>
                  <tr className="tableCell">
                    <td className="tableTitle">PHOTO</td>
                    <td className="tableTitle">FIRST NAME</td>
                    <td className="tableTitle">LAST NAME</td>
                    <td className="tableTitle">DEPARTMENT</td>
                    <td className="tableTitle">OCCUPATION</td>
                    <td className="tableTitle">FIRE</td>
                  </tr>
                  <tr className="tableCell">
                    <td className="tableCell">
                      <button 
                        className="alphaButtons"
                        onClick="sortAlpha"
                      >abc
                      </button>
                  
                    </td>
                    <td className="tableCell">
                      <button 
                        className="alphaButtons"
                        onClick="sortAlpha"
                      >abc
                      </button>
                    </td>
                    <td className="tableCell">
                      <button 
                        className="alphaButtons"
                        onClick="sortAlpha"
                      >abc
                      </button>
                    </td>
                    <td className="tableCell">
                      <button 
                        className="alphaButtons"
                        onClick="sortAlpha"
                      >abc
                      </button>
                    </td>
                    <td className="tableCell">
                      <button 
                        className="alphaButtons"
                        onClick="sortAlpha"
                      >abc
                      </button>
                    </td>
                  </tr>
                  {this.state.employeeArr.map(employee => (
                    <EmployeeCard key={employee.id} {...employee} filterArray={this.deleteEmployee}/>
                  ))}
               </tbody>
            </table>
          </div>
        </div>

      </div>
  
    );
  }
}

export default App;
