import { useState } from "react";
import { generateToken } from "../data/functions";
import data from "../data/TestData.json" 

const Testing = () => {
  const [search, setSearch] = useState(null)
  const [token, setToken] = useState(null)
  

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (search !== "") {
      var activeUser = data.users.find(user => {
        return user.email === search.value
      })
      alert(activeUser.password)
      return
    }
    alert("please provide a valid input");
  }

  const handleGenerate = (e) => {
      e.preventDefault()
      let token = generateToken(search.value)
      console.log(token)
      setToken(token)
  }
  const handleInput = (e) => {
    const { value } = e.target;
    setSearch((prev) => ({
      ...prev,
      value
    }));
  };

  return (
    <div>
    <form onSubmit={handleSubmitEvent}>
        <div className="form_control">
            <label htmlFor="user-email">Email:</label>
            <input
                type="email"
                id="user-email"
                name="email"
                placeholder="example@yahoo.com"
                aria-describedby="user-email"
                aria-invalid="false"
                onChange={handleInput}
            />
            <div id="user-email" className="sr-only">
                Please enter a valid username. It must contain at least 6 characters.
            </div>
        </div>
        <button className="btn-submit">Submit</button>
    </form>

    </div>
  )
}

export default Testing