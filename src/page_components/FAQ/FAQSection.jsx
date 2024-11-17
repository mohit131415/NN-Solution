// FAQSection.jsx

import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqData = [
    { question: "What services does NN Solution provide?", answer: "NN Solution provides a range of IT services including web development, mobile applications, and cloud solutions tailored to business needs." },
    { question: "How can I contact NN Solution?", answer: "You can reach out to us via the contact form on our website, or directly email support@nns.com." },
    { question: "Does NN Solution offer consulting services?", answer: "Yes, we offer expert consulting services to help businesses with digital transformation." },
    // Add more FAQ items as needed
  ];

  return (
    <section className="my-10 p-5 space-y-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQSection;
