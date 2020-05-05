import React, { useContext, useState } from "react";
import { AppContext } from "../appContext";
import { Redirect } from "react-router-dom";
import axios from 'axios'

const Tutor = () => {
  const { name } = useContext(AppContext);
  const [state, setState] = useState({
    title: "",
    file: "",
    description: "",
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      setState((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
  };

  const handleFileChange = (e) => {
    e.persist();
    setState((prev) => {
      return {
        ...prev, file: e.target.files[0]
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('SUBMIT')
    const formData = new FormData();

    formData.append('title', state.title);
    formData.append('description', state.description);
    formData.append('stuff', state.file);

    try {
    const res = await axios.post('/upload', formData);
    console.log(res.data)
    } catch (error) {
      console.log(error)
    }

  };

  if (!name) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3>Welcome Tutor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
        />
        <textarea
          value={state.description}
          onChange={handleChange}
          name="description"
        />
        <input type="file" name="myVideo" onChange={handleFileChange} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default Tutor;
