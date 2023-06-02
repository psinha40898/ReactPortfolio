import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

const useTypingAnimation = (text, typingSpeed) => {
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const typeText = async () => {
      let newDisplayedText = "";
      for (let i = 0; i < text.length; i++) {
        newDisplayedText += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
        setDisplayedText(newDisplayedText);
      }
    };

    typeText();
  }, [text, typingSpeed]);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, transition: { duration: 3 } });
    };

    sequence();
  }, [controls]);

  return { displayedText, animationControls: controls };
};

export default useTypingAnimation;
