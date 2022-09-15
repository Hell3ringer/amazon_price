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
      toEmail: "",
      obj: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGET = this.handleGET.bind(this);
    this.handleState = this.handleState.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    if(name === "isEnd"){
      console.log("value" + value);
      if(value === true){
        this.setState({
          isEnd : false
        })
      }else{
        this.setState({
          isEnd : true
        })

      }
    }else{

      this.setState({
        [name]: value,
        // isPref : false
      });
    }

    event.preventDefault();
  }

  handleState(event) {
    console.log("state is");
    // console.log(JSON.stringify(this.state.obj));
    console.log(this.state.isEnd);

    event.preventDefault();
  }
  handleGET(event) {
    axios.get("/api").then(({ data }) => {
      this.setState({
        obj: data,
      });
    });

    event.preventDefault();
  }
  handleSubmit(event) {
    const obj = {
      url: this.state.url,
      myPrice: this.state.myPrice,
      isEnd: this.state.isEnd,
      toEmail: this.state.toEmail,
      prefTitle: this.state.prefTitle,
    };

    axios.post("/api", obj).then(() => {
      console.log("data entered...");
      // console.log(JSON.stringify(data))
      // this.setState({
      //   obj : data
      //  })
    });
    event.preventDefault();
  }

  render() {
    return (
      // prefTitle
      <div>
        <form>
          <div class="mb-3">
            <label class="form-label"> Prefered Title : </label>
            <input
              type="text"
              name="prefTitle"
              class="form-control"
              placeholder="prefered title"
              value={this.state.prefTitle}
              onChange={this.handleChange}
            />
            <div class="form-text">
              Please select an appropiate title for your product
            </div>
          </div>

          {/* url */}
          <div class="mb-3">
            <label class="form-label"> URL : </label>
            <input
              type="url"
              name="url"
              class="form-control"
              placeholder="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>

          {/* // myPrice */}
          <div class="row g-3 allign-items-center">
            <div class="col-auto">
              <label class="col-form-label"> Prefered price : </label>
            </div>

            <div class="col-auto">
              <div class="input-group">
                <span class="input-group-text">₹</span>
                <input
                  type="text"
                  name="myPrice"
                  class="form-control"
                  value={this.state.myPrice}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          {/* // to email */}
          <div class="mb-3">
            <label class="form-label"> Email : </label>
            <input
              type="email"
              name="toEmail"
              class="form-control"
              value={this.state.toEmail}
              onChange={this.handleChange}
            />
          </div>

          {/* // isEnd */}
          <div class="mb-3 form-check">
            <input
              
              type="checkbox"
              name="isEnd"
              class="form-check-input"
              value={Boolean(this.state.isEnd)}
              onChange={this.handleChange}
            />
            {this.state.isEnd}

            <label class="form-check-label"> Do u want to reccur ? </label>
          </div>
          <button onClick={this.handleState}>Show State</button>

          <button onClick={this.handleGET}>GET</button>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
        
        <br></br>
        <RenderList />
      </div>
    );
  }
}
export default Dashboard;
