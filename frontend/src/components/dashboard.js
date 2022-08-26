import React from "react";
// import {writeJsonFile} from 'write-json-file';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefTitle: "",
      url: "",
      isEnd: true,
      myPrice: "",
      obj : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      // isPref : false
    });
  }
  handleSubmit(event) {

    fetch("/api" , {
      method : 'POST'
    }).then(
      res => res.json()    
      
    ).then(
      data => {
        // this.setState({
            // obj : data
        // })
        console.log(JSON.stringify(data));
      }
    )

    event.preventDefault();
  }

  render() {
    return (
      // prefTitle
      <div>
        <form>
          <label>
            prefered title :
            <input
              type="text"
              name="prefTitle"
              value={this.state.prefTitle}
              onChange={this.handleChange}
            />
          </label>
          {/* <input type="submit" value="Submit"></input> */}

          {/* url */}
          <label>
            url :
            <input
              type="url"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </label>

          {/* // myPrice */}
          <label>
            set your prefered price :
            <input
              type="number"
              name="myPrice"
              value={this.state.myPrice}
              onChange={this.handleChange}
            />
          </label>

          {/* // isEnd */}
          <label>
            do u want to reccur :
            <input
              type="checkbox"
              name="isEnd"
              value={this.state.isEnd}
              onChange={this.handleChange}
            />
          </label>

          <button onClick={this.handleSubmit}>submit</button>
        </form>
        this is from dashboard...
        <br></br>
        {/* {this.state.isPref && this.state.prefTitle} */}
        {/* {this.setState({isPref : false})} */}
      </div>
    );
  }
}
export default Dashboard;
