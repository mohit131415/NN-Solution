// FAQItem.jsx

import { useState } from 'react';
import ExpandableButton from './Button';

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ExpandableButton onClick={toggleExpand} isExpanded={isExpanded} white={false}>
      <div className="text-left">
        <h3 className="font-semibold text-lg">
          {question}
        </h3>
        {isExpanded && <p className="mt-2 text-gray-700">{answer}</p>}
      </div>
    </ExpandableButton>
  );
};

export default FAQItem;
