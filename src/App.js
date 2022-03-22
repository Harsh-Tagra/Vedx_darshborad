import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import List from "./components/List";
function App() {
  const [Data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setfilter] = useState("");
  useEffect(() => {
    if (search.length === 0) {
      setResult([...Data]);
    } else {
      // setSearch(search.toUpperCase);
      setResult(
        Data.filter(({ customer, status }) => customer.includes(search))
      );
    }

    if (filter && filter !== "All") {
      setResult((res) => res.filter(({ status }) => status.includes(filter)));
    }
  }, [search, filter]);

  const fetchdata = async () => {
    const Api = "https://my-json-server.typicode.com/Ved-X/assignment/orders";
    let Res = await fetch(Api);
    const data = await Res.json();
    setData(data);
    setResult(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.clear();
  return (
    <>
      {" "}
      <div className="form">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
          placeholder="search"
        />
        <select
          name="filter"
          style={{
            height: "5.5vh",
            backgroundColor: "white",
            border: "none ",
            borderRadius: "4px",
          }}
          onChange={(e) => {
            setfilter(e.target.value);
          }}
        >
          <option value="none" selected disabled hidden>
            filter
          </option>
          <option value="All">All </option>

          <option value="Completed">Completed </option>
          <option value="Prepared">Prepared</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      {/* {search.length === 0 ? <List result={Data} /> : <List result={result} />} */}
      <List result={result} />
    </>
  );
}

export default App;
