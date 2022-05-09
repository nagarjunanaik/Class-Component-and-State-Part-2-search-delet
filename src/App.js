import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const intialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {seechInput: '', userDetailsList: intialuserDetailsList}

  onSerchResult = event => {
    this.setState({seechInput: event.target.value})
  }

  onDelet = uniqueNo => {
    const {userDetailsList} = this.state
    const filterUserDetails = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filterUserDetails})
  }

  render() {
    const {seechInput, userDetailsList} = this.state
    const serchResult = userDetailsList.filter(each =>
      each.name.includes(seechInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onSerchResult} value={seechInput} />
        <ul className="list-container">
          {serchResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              onDelet={this.onDelet}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
