import { motion } from "framer-motion";
import Section from "../components/Section";
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqData = [
    { 
      question: "What services does NN Solution provide?", 
      answer: "NN Solution offers a comprehensive range of cutting-edge IT services, including web development, mobile applications, cloud solutions, and AI integration. Our tailored approaches ensure that each solution is perfectly aligned with your unique business needs and goals." 
    },
    { 
      question: "How can I contact NN Solution?", 
      answer: "You can easily reach out to us through multiple channels. Use the contact form on our website for quick inquiries, email us directly at support@nns.com, or schedule a video call for more in-depth discussions. We're always here to assist you with your technology needs." 
    },
    { 
      question: "Does NN Solution offer consulting services?", 
      answer: "We provide expert consulting services to help businesses navigate their digital transformation journey. Our seasoned consultants offer strategic insights, technology roadmaps, and implementation guidance to ensure your business stays ahead in the rapidly evolving digital landscape." 
    },
    { 
      question: "What industries does NN Solution serve?", 
      answer: "NN Solution serves a variety of industries, including e-commerce, healthcare, education, finance, and real estate. We customize our solutions to fit the specific needs and challenges of each industry, ensuring optimal results." 
    },
    { 
      question: "What is the process of working with NN Solution?", 
      answer: "Our process begins with understanding your business objectives and assessing your current technological landscape. We then design a customized strategy, collaborate on development, and continue to provide support post-launch to ensure your success." 
    },
    { 
      question: "Can NN Solution assist with digital marketing?", 
      answer: "Yes, we provide digital marketing services, including SEO, PPC campaigns, content marketing, and social media management, to help enhance your online presence and drive more traffic to your site." 
    },
    { 
      question: "What technologies does NN Solution specialize in?", 
      answer: "NN Solution specializes in a range of technologies such as React, Angular, Node.js, Python, .NET, cloud platforms like AWS and Azure, and AI technologies including machine learning and data analytics." 
    },
    { 
      question: "Is NN Solution experienced in mobile app development?", 
      answer: "Absolutely! We have extensive experience in developing native and cross-platform mobile applications tailored for both iOS and Android devices, ensuring a seamless and engaging user experience." 
    },
    { 
      question: "How secure are the solutions provided by NN Solution?", 
      answer: "Security is a top priority at NN Solution. We incorporate best practices for secure development, including data encryption, secure authentication, and regular security audits to protect your data and systems." 
    },
    { 
      question: "What is NN Solution's approach to project management?", 
      answer: "We follow an agile project management approach to ensure flexibility, frequent feedback, and continuous improvement throughout the development lifecycle. This allows us to adapt quickly to any changes and deliver better results." 
    },
    { 
      question: "Does NN Solution provide support after project delivery?", 
      answer: "Yes, we offer ongoing support and maintenance services to ensure your systems are always up-to-date and operating efficiently. Our support plans can be tailored to meet your specific needs." 
    },
    { 
      question: "What is the timeline for completing a project with NN Solution?", 
      answer: "The project timeline depends on the scope and complexity of your requirements. We work closely with you to set realistic milestones and deadlines to ensure timely delivery while maintaining high-quality standards." 
    },
    { 
      question: "What are the benefits of using cloud solutions from NN Solution?", 
      answer: "Our cloud solutions offer scalability, cost-effectiveness, and enhanced collaboration. With our expertise in cloud technologies, we help businesses achieve high availability, reduced downtime, and improved operational efficiency." 
    },
    { 
      question: "What makes NN Solution different from other IT service providers?", 
      answer: "Our commitment to personalized service, deep industry expertise, and cutting-edge technology sets us apart. We prioritize our clients’ success and adapt our strategies to each unique business challenge." 
    }
  ];
  

  return (
    <Section className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4ca9eb] to-[#094669] mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;

