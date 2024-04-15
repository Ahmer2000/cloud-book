import React from "react";

const About = () => {
   
    
  return (
    <div className="container py-1 "  >
      <h2 className="my-5 formH" >About Cloud-book</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item " >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              
            >
              <strong>Add notes on cloud</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              Cloud-book helps you to add, edit, delete your notes safely with your privacy fully maintained.Your notes will be stored in our cloud-book's server. 
            </div>
          </div>
        </div>
        <div className="accordion-item " >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
             
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              Cloud-book is a free note-taking tool. 
            </div>
          </div>
        </div>
        <div className="accordion-item " >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
             
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              This note-taking software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

