import React from "react";
import axios from "axios";

import RenderList from "./renderList";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefTitle: "",
      url: "",
      isEnd: false,
      myPrice: "",
      toEmail : "",
      obj : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGET = this.handleGET.bind(this);
    this.handleState = this.handleState.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      // isPref : false
    });

    event.preventDefault()
  }
 
  handleState(event){
    console.log("state is");
    console.log(JSON.stringify(this.state.obj));

    event.preventDefault();
  }
  handleGET(event){
    
    axios.get("/api")
    .then(({data}) => {

     this.setState({
      obj : data
     })
     
    })
     
    event.preventDefault()
  }
  handleSubmit(event) {

   const obj = {
    "url" : this.state.url,
    "myPrice" : this.state.myPrice,
    "isEnd" : this.state.isEnd,
    "toEmail" : this.state.toEmail,
    "prefTitle" : this.state.prefTitle,
   }
    
    axios.post("/api" , obj)
    .then(() => {
      console.log("data entered...");
      // console.log(JSON.stringify(data))
      // this.setState({
      //   obj : data
      //  })


    })
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
          
          {/* // to email */}
          <label>
            email :
            <input
              type="email"
              name="toEmail"
              value={this.state.toEmail}
              onChange={this.handleChange}
            />
          </label>

          {/* // isEnd */}
          <label>
            do u want to reccur :
            <input
              type="checkbox"
              name="isEnd"
              value={Boolean(this.state.isEnd)} 
              onChange={this.handleChange}
            />
            {this.state.isEnd}
          <button onClick={this.handleState}>Show State</button>
          </label>
          
          <button onClick={this.handleGET}>GET</button>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
        this is from dashboard...
        <br></br>

        
        <RenderList />
      </div>
    );
  }
}
export default Dashboard;
