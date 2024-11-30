import ExpandableButton from './Button';

const FAQItem = ({ question, answer }) => {
  return (
    <ExpandableButton title={question}>
      <p className="text-gray-300">{answer}</p>
    </ExpandableButton>
  );
};

export default FAQItem;

