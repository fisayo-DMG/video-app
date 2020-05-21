import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from "reactstrap";
import axios from 'axios'

const AddVideo = () => {
  const [modal, setModal] = useState(false);

  const [values, setValues] = useState({
    instructor: "",
    title: "",
    description: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e) => {
    e.persist();
    setValues((prev) => {
      return {
        ...prev,
        file: e.target.files[0],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    const formData = new FormData();

    formData.append("instructor", values.instructor);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("stuff", values.file);

    try {
      const res = await axios.post("/upload", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggle = () => {
    setModal((prevState) => !prevState);
  };
  return (
    <div>
      <NavLink href="#" onClick={toggle}>
        <Button size="sm">Add Video</Button>
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Video</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="instructor">Instructor</Label>
              <Input
                name="instructor"
                id='instructor'
                type="text"
                placeholder="Name of Instructor"
                onChange={handleChange}
                className='mb-2'
                value={values.instructor}
              />

              <Label for="title">Title</Label>
              <Input
                name="title"
                id='title'
                type="text"
                placeholder="Title of Video"
                onChange={handleChange}
                className='mb-2'
                value={values.title}
              />

              <Label for="description">Description</Label>
              <Input
                style={{ resize: "none" }}
                rows="3"
                name="description"
                id='description'
                type="textarea"
                placeholder="Brief Description of Video"
                onChange={handleChange}
                className='mb-3'
                value={values.description}
              />

              <Input className='mb-2' type="file" onChange={handleFileChange}  />

              <Button style={{textAlign: 'center', display: 'block'}} className='m-auto' size='sm'>Upload Video</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddVideo;
