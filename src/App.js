import React, { Component } from 'react';
import './App.css';
import Mentor from './Mentor';

class App extends Component {

  constructor() {
    super()

    this.state = {
      mentors: [
        { id: 1, firstName: "Alan", lastName: "Miller" },
        { id: 2, firstName: "Conner", lastName: "Jensen" },
        { id: 3, firstName: "Doug", lastName: "Maxfield" }
      ],
      selectedMentor: ""
    }
    this.selectMentor = this.selectMentor.bind(this);
  }

  selectMentor(mentor) {
    this.setState({ selectedMentor: mentor });
  }

  render() {
    console.log("selected", this.state.selectedMentor)
    return (
      <div className="App">
        {this.state.selectedMentor ? `The selected mentor is ${this.state.selectedMentor}!` : "No mentor selected."}

        {this.state.mentors.map((mentor) => (
          <Mentor
            key={mentor.id}
            mentor={mentor}
            selectedMentor={this.state.selectedMentor}
            selectMentor={this.selectMentor}
          />
        ))}

      </div>
    );
  }
}

export default App;
