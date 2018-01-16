import React from 'react';
import Mentor from './Mentor';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props)

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

  selectMentor(mentorName) {
    this.setState({ selectedMentor: mentorName });
  }

  render() {
    return (
      <div>
        The selected mentor is {this.state.selectedMentor}!
        {this.state.mentors.map((mentorObject) => (
          <Mentor
            mentor={mentorObject}
            selectMentor={this.selectMentor}
          />
        ))}
      </div>
    )
  }
}

// export default App;