import React, { useState } from "react";
import '../faqestion/Faq.css'

const Faq = () => {
  return (
    <div className="faq-section">
      <div className="faq-data">
        <h1>Frequently asked questions</h1>
        <details className="Quest">
          <summary className="Question1">How do I create an Account?</summary>
          <p className="Ans1">Go to the website click on join ride.</p>
        </details>

        <details className="Quest">
          <summary className="Question2">How do i book a ride?</summary>
          <p className="Ans2">Go to the website search for avaliable trips going to your destination,
            then select the option that best suit your need.</p>
        </details>

        <details className="Quest">
          <summary className="Question3">Is Go2Geda in the city?</summary>
          <p className="Ans3">Go2Geda can be found in lagos for now.</p>
        </details>

        <details className="Quest">
          <summary className="Question4">How do i join as driver?</summary>
          <p className="Ans4">Go to the website click on join driver.</p>
        </details>
      </div>
    </div>
  );
}
export default Faq;
