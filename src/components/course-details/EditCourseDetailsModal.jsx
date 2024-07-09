import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditCourseDetailsModal = ({ show, onHide, onSave, courseDetails }) => {
  const [formState, setFormState] = useState(courseDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormState({ ...formState, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Course Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={formState.title} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-3'>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" style={{height:"150px"}} value={formState.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-3'>Photo</Form.Label>
            <Form.Control type="file" name="photo" onChange={handleFileChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-3'>Video URL</Form.Label>
            <Form.Control type="text" name="video" value={formState.video} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" className='mt-4'>Save</Button>
          <Button variant="secondary" onClick={onHide} className='mt-4 ms-3'>Cancel</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCourseDetailsModal;