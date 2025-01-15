import React from 'react';
import './RaktSetu-Faqs.css';

const FAQ = () => {
  const faqs = [
    {
      question: "Whom should I contact in case of any problem?",
      answer: "Kindly email your queries on RaktSetu@cdac.in",
    },
    {
      question: "What is RaktSetu?",
      answer: (
        <span>
          Details about RaktSetu are available at{' '}
          <a href="https://RaktSetu.in/BLDAHIMS/bloodbank/about.cnt" target="_blank" rel="noopener noreferrer">
            about RaktSetu page
          </a>
        </span>
      ),
    },
    {
      question: "Where can I find latest blood stock from various blood banks?",
      answer: (
        <span>
          The blood stock can be searched at{' '}
          <a href="https://RaktSetu.in/BLDAHIMS/bloodbank/stockAvailability.cnt" target="_blank" rel="noopener noreferrer">
            Stock availability page
          </a>
        </span>
      ),
    },
    {
      question: "Where can I find details of camps being conducted by various blood banks?",
      answer: (
        <span>
          The details of camps can be found at{' '}
          <a href="https://RaktSetu.in/BLDAHIMS/bloodbank/campSchedule.cnt" target="_blank" rel="noopener noreferrer">
            Camp schedule page
          </a>
          . Many camps also accept online pre-registration.
        </span>
      ),
    },
    {
      question: "How can I onboard my blood bank to RaktSetu?",
      answer: (
        <span>
          Kindly fill the form{' '}
          <a href="https://RaktSetu.in/BLDAHIMS/bloodbank/bbOnboard.cnt?hmode=GETONBOARDFORMESSENTIAL" target="_blank" rel="noopener noreferrer">
            Click here to fill to form
          </a>
        </span>
      ),
    },
    {
      question: "How to add your blood bank to RaktSetu?",
      answer: (
        <span>
          Kindly Register your blood bank at{' '}
          <a href="https://RaktSetu.in/BLDAHIMS/bloodbank/bbOnboard.cnt?hmode=GETONBOARDFORMESSENTIAL" target="_blank" rel="noopener noreferrer">
            Add your blood bank page
          </a>
        </span>
      ),
    },
    {
      question: "How to check Platelet unit in RaktSetu app?",
      answer: "The blood stock can be searched by default as Whole Blood at Stock availability page. You can change component type as Platelet then search again.",
    },
    {
      question: "How can I check the nearest blood bank from my current location?",
      answer: "Use RaktSetu mobile App, enable the location, and then search nearest blood bank, then you can see distance wise list of blood banks.",
    },
    {
      question: "How to verify blood unit is available or not on current date?",
      answer: "You can see last updated date or LIVE status into blood availability option.",
    },
    {
      question: "How does age affect my ability to donate blood?",
      answer: "Minimum age for whole blood donation is 18 years in India. The maximum age for blood donation depends on the kind of donation.",
    },
    {
      question: "Need Blood Immediately. Which app finds patients blood requirement as soon as possible?",
      answer: "At Google Play Store, you can search RaktSetu. Once installed, using GPS technology, the app locates the nearest blood bank along with blood availability.",
    },
    {
      question: "I had alcohol before going to donate blood. Is it Okay?",
      answer: "No. We do not take blood from anyone under the influence of alcohol. This is because being intoxicated can affect your ability to understand and answer the donor questionnaire and declaration.",
    },
    {
      question: "I am taking antibiotics. Can I donate blood?",
      answer: "It depends on why you are taking the antibiotics and it may also depend after doctor counselling.",
    },
    {
      question: "Are there any side effects of Blood donations?",
      answer: "There are no side effects of blood donation. The blood bank staff ensures that your blood donation is a good experience so as to make you a regular blood donor. There are a number of people who have donated more than 25-100 times in their entire lifetime.",
    },
    {
      question: "How often can I donate Blood?",
      answer: "After every three –four months you can donate blood.",
    },
    {
      question: "What should I eat before blood donation?",
      answer: "Anything that you normally eat at home. Eating a light snack and having a soft drink before blood donation is sufficient.",
    },
  ];

  return (
    <div className="container">
      {faqs.map((faq, index) => (
        <div className="panel-group" key={index}>
          <div className="panel panel-danger">
            <div className="panel-heading">{faq.question}</div>
            <div className="panel-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
