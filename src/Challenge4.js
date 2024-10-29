import { useState } from "react";

export default function Challenge4() {
  const [customForm, setCustomForm] = useState({
    username: "",
    fullname: "",
    age: "",
  });
  const [data, setData] = useState({ username: "", fullname: "", age: "" });
  // const sendRequest = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("somedb.com/api/user/create", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(customForm),
  //   });
  //   const data = await res.json();
  //   setData(data);
  // };

  const sendRequest = (e) => {
    e.preventDefault();
    setData({
      username: customForm.username,
      fullname: customForm.fullname,
      age: customForm.age,
    });
  };
  return (
    <div>
      <h1>4. Submit a form</h1>
      <form>
        <div>
          <label htmlFor="userName">
            Username:
            <input
              onChange={(e) =>
                setCustomForm({ ...customForm, username: e.target.value })
              }
              value={customForm.username}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="fullName">
            FullName:
            <input
              onChange={(e) =>
                setCustomForm({ ...customForm, fullname: e.target.value })
              }
              value={customForm.fullname}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="age">
            Age:
            <input
              onChange={(e) =>
                setCustomForm({ ...customForm, age: e.target.value })
              }
              value={customForm.age}
            />
          </label>
        </div>
        <br />
        <button onClick={sendRequest}>Submit</button>
        <h4>Request Sent to DB with below request data</h4>
        <ul>
          <li>UserName: {data.username}</li>
          <li>FullName: {data.fullname}</li>
          <li>Age: {data.age}</li>
        </ul>
      </form>
    </div>
  );
}
