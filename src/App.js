import React from 'react';
import EmployeeCard from './components/FriendCard';
import Title from './components/Title';
import Employees from './officeEmployees.json';

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
            <Title>Employees</Title>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table>
              {this.state.employeeArr.map(friend => (
                <EmployeeCard key={friend.id} {...friend} filterArray={this.filterArray}/>
              ))}
            </table>
          </div>
        </div>

      </div>
  
    );
  }
}

export default App;
