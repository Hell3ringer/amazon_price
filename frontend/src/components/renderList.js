import React, { useState, useEffect } from "react";
import axios from "axios";

function RenderList(params) {
  const [list, setList] = useState([]);

  function getList() {
    axios.get("/api").then(({ data }) => {
      setList(data["data"]);
      console.log("data");
      console.log({ data }["data"]["data"]);
    });
  }
  function getLog() {
    console.log("list");

    console.log({ list });
  }

  function deleteItem(item, idx) {
    console.log("inside delteitem");
    console.log(item.prefTitle);
    const obj = {
      index: idx,
      prefTitle: item.prefTitle,
    };
    axios
      .delete("/api", { data: obj })
      .then(() => {
        console.log("item got deleted");
        getList();
      })
      .catch((e) => {
        console.log("errors");
        console.log(e);
      });
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="row-auto container justify-content-center bg-white">
      from render list...
      <button onClick={() => getList()}>Refresh</button>
      <button onClick={() => getLog()}>obj data</button>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        {list.map((item, idx) => (
          <div className="card w-50 mb-2 px-2 pb-2 border-dark" orientation="horizontal" key={item.prefTitle}>
            <div className="card-footer">
                Product
            </div>
              <h5 className="card-title">{item.prefTitle}</h5>
            <ol key={item.prefTitle} className="list-group list-group-flush">
              <ul className="list-group-item">{item.myPrice}</ul>
              <ul className="list-group-item">{item.toEmail}</ul>
              <ul className="list-group-item">{item.url}</ul>
              <ul className="list-group-item"></ul>
            </ol>
            <button className="btn btn-primary" onClick={() => deleteItem(item, idx)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RenderList;
