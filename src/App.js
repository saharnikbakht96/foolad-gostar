import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSearchList } from './store/actions/search.actions';
import search from './img/search.svg';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      query: JSON.parse(localStorage.getItem('query')) || [],
    }
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    },
      () => {
        localStorage.setItem('query', JSON.stringify(this.state.query))
      }
    );
  }

  render() {
    return (
      <div>
        <div className="input-box">
          <div className="search">
            <img src={search} alt="search" className="search-icon" />
            <input className="search-input" type="text" placeholder="Search..."
              value={this.state.query}
              onChange={e => this.handleChange(e)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.props.getSearchList(this.state.query);
                }
              }}
            />
            <button className="search-button" onClick={() => this.props.getSearchList(this.state.query)}>
              Search
            </button>
          </div>
        </div>
        <div className="results">
          {this.props.searchList.length > 0 ?
            (
              <div className="row">
                {this.props.searchList.map((item, index) => {
                  return (
                    <div key={index} className="col-md-4 col-12 p-0">
                      <div className="item-box">
                        <div>
                          <img src={item.avatar_url} className="avatar" />
                        </div>
                        <div>
                          <h5>
                            {item.login}
                          </h5>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            )
            : null
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    searchList: state.searchList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearchList: (query) => dispatch(getSearchList(query))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
