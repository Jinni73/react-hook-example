import React from 'react';
import ListWrapper from '../ListWrapper';
import { ThemeContext } from '../../context';
import Row from '../Row';

export default class OldList extends React.Component {
  state = { firstname:'', lastname: '', width: window.innerWidth };
  
  handleFirstNameChange = (e) => {
    this.setState({ firstname: e.target.value })
  }

  handleLastNameChange = (e) => {
    this.setState({ lastname: e.target.value })
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount(){
    document.title = `${this.state.firstname} ${this.state.lastname}`;
    window.addEventListener('resize', this.handleResize);
  }
  
  componentDidUpdate() {
    document.title = `${this.state.firstname} ${this.state.lastname}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <ListWrapper theme={theme}>
            <Row label="First Name">
              <input
                value={this.state.firstname}
                onChange={this.handleFirstNameChange}
              />
            </Row>
            <Row label="Last Name">
              <input
                value={this.state.lastname}
                onChange={this.handleLastNameChange}
              />
            </Row>
            <Row label="Width">
              <div className="display">
                {this.state.width}
              </div>
            </Row>
          </ListWrapper>
        )}
      </ThemeContext.Consumer>
    )
  }
}