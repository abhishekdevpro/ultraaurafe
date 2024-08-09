import React from "react";
import Link from "next/link";

const ErrorMessage = ({ error }) => (
  <div className="container mt-5">
    <div className="alert alert-warning" role="alert">
      <h4 className="alert-heading">Course Not Found</h4>
      <p>{error || "We couldn't find the course you're looking for."}</p>
      <hr />
      <Link href="/" className="btn btn-primary mt-3">
        Back to Courses
      </Link>
    </div>
  </div>
);

export default ErrorMessage;