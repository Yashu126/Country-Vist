import './App.css'

import {Component} from 'react'

// This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {countryList: initialCountriesList}

  renderVistedList = () => {
    const {countryList} = this.state
    const isVisitedList = countryList.filter(each => each.isVisited === true)
    return isVisitedList
  }

  changeStatus = id => {
    this.setState(prev => ({
      countryList: prev.countryList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: !each.isVisited}
        }
        return each
      }),
    }))
  }

  render() {
    const {countryList} = this.state
    const visitedList = this.renderVistedList()
    return (
      <div className="background-con">
        <h1 className="heading">Countries</h1>
        <ul className="country-list-con">
          {countryList.map(each => (
            <li className="country-name-btn" key={each.id}>
              <p>{each.name}</p>
              {each.isVisited ? (
                <button
                  onClick={() => this.changeStatus(each.id)}
                  type="button"
                  className="visted-btn"
                >
                  <p>Visited</p>
                </button>
              ) : (
                <button
                  onClick={() => this.changeStatus(each.id)}
                  type="button"
                  className="to-vist-btn"
                >
                  Visit
                </button>
              )}
            </li>
          ))}
        </ul>
        <h1 className="heading">Visited Countries</h1>
        {visitedList.length === 0 ? (
          <p>No Countries Visited Yet</p>
        ) : (
          <ul className="visted-list-con">
            {visitedList.map(each => (
              <li className="visted-item" key={each.id}>
                <img
                  className="visted-img"
                  src={each.imageUrl}
                  alt="thumbnail"
                />
                <div className="country-name-btn some">
                  <p>{each.name}</p>
                  <button
                    onClick={() => this.changeStatus(each.id)}
                    type="button"
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default App
