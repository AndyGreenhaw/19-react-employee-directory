import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Employees from './officeEmployees.json';
import "./style.css";

class App extends React.Component {

  state = {
    employeeArr: Employees
  }

  filterArray = (id) => {
    // This ID matches the friend card based on the code at the bottom of index
    console.log(id);

    // modify the array in state, and filer out whatever match id is passed in
    const filteredArray = this.state.employeeArr.filter( employee => employee.id !== id )
    console.log(filteredArray)

    this.setState({employeeArr: filteredArray})
  }

  filterShow = (show) => {
    // This ID matches the friend card based on the code at the bottom of index
    console.log(show);

    // modify the array in state, and filer out whatever match id is passed in
    const filteredArray = this.state.employeeArr.filter( employee => employee.show !== show )
    console.log(filteredArray)

    this.setState({employeeArr: filteredArray})
  }

  render(){
    return (
      <div className="container">

        <div className="row">
          <div className="col-6">
            <button>Sort by Show</button>
          </div>
          <div className="col-6">
            <button>Sort Employees Alphabetically</button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1>Employees</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table>
                <tbody>
                  <tr className="tableCell">
                    <td className="tableHeader">FIRST NAME</td>
                    <td className="tableHeader">LAST NAME</td>
                    <td className="tableHeader">OCCUPATION</td>
                    <td className="tableHeader">DEPARTMENT</td>
                    <td className="tableHeader">FIRE</td>
                  </tr>
                  <tr className="tableCell">
                    <td className="tableCell">
                      <button>Ʌ</button><button>V</button>
                    </td>
                    <td className="tableCell">
                      <button>Ʌ</button><button>V</button>
                    </td>
                    <td className="tableCell">
                      <button>Ʌ</button><button>V</button>
                    </td>
                    <td className="tableCell">
                      <button>Ʌ</button><button>V</button>
                    </td>
                    <td className="tableCell">
                      <button>Ʌ</button><button>V</button>
                    </td>
                  </tr>
                  {this.state.employeeArr.map(friend => (
                    <EmployeeCard key={friend.id} {...friend} filterArray={this.filterArray}/>
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
