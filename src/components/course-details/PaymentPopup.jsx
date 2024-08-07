// // PaymentPopup.js
// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const PaymentPopup = ({ show, onHide }) => {
//   return (
//     <Modal show={show} onHide={onHide} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Payment</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {/* Add your payment form or content here */}
//         <p>Payment details go here.</p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary">Proceed to Payment</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default PaymentPopup;

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const PaymentPopup = ({ show, onHide, courseId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(courseId,"Course id hu")
  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    // Assuming the token is stored in localStorage or retrieved from context
    const token = localStorage.getItem('token'); // or use a context or other method to get the token

    try {
      const response = await axios.post(
        'https://api.novajobs.us/api/students/buy',
        {
          amount: 1,
          course_id: Number(courseId),
          net_amount: 1, 
        },
        {
          headers: {
            'Authorization': `${token}`, // Include the token in the Authorization header
            'Content-Type': 'application/json', // Ensure the Content-Type is set to application/json
          }
        }
      );

      if (response.status === 200) {
        // Handle successful payment (e.g., show success message, redirect to course page, etc.)
        alert('Payment successful! You are now enrolled in the course.');
        onHide();
      } else {
        throw new Error('Payment failed. Please try again.');
      }
    } catch (error) {
      setError(error.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <p>Payment details go here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePayment} disabled={loading}>
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentPopup;
