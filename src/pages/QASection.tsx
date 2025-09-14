import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import './QASection.css';

interface QAItem {
  id: string;
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    id: '1',
    question: 'What is Base UI?',
    answer: 'Base UI is a library of high-quality unstyled React components for design systems and web apps.'
  },
  {
    id: '2',
    question: 'How do I get started?',
    answer: 'You can get started by installing the package via npm or yarn, then importing the components you need into your React application. Check our documentation for detailed setup instructions.'
  },
  {
    id: '3',
    question: 'Can I use it for my project?',
    answer: 'Yes! Base UI components are designed to be flexible and can be easily customized to match your project\'s design requirements. They work great for both personal and commercial projects.'
  },
  {
    id: '4',
    question: 'Is it compatible with TypeScript?',
    answer: 'Absolutely! Base UI is built with TypeScript and provides full type safety for all components and their props.'
  },
  {
    id: '5',
    question: 'What about browser support?',
    answer: 'Base UI supports all modern browsers including Chrome, Firefox, Safari, and Edge. We ensure compatibility with the latest versions of these browsers.'
  }
];

const QASection = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['1'])); // First item open by default
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className={`qa-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <h1 className="qa-title">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="qa-list">
        {qaData.map(item => (
          <div key={item.id} className={`qa-item ${openItems.has(item.id) ? 'open' : ''}`}>
            <div className="qa-question" onClick={() => toggleItem(item.id)}>
              <span>{item.question}</span>
              {openItems.has(item.id) ? <Minus size={16} /> : <Plus size={16} />}
            </div>
            {openItems.has(item.id) && (
              <div className="qa-answer animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>

        ))}
      </div>
    </div>
      
  );
};

export default QASection;