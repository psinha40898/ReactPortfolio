import { motion } from "framer-motion";
const ListAnimationComponent = ({ textList, middleList, resultsList }) => {
    return (
      <>
        {/* Render the textList */}
        {textList.map((text, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (textList.length - index - 1) * 0.1 }} // Add delay relative to index
          >
            {text}
          </motion.div>
        ))}
  
        {/* Render the middleList */}
        {middleList.map((text, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index + textList.length) * 0.1 }} // Add delay relative to index and offset by textList.length
          >
            {text}
          </motion.div>
        ))}
  
        {/* Render the resultsList */}
        {resultsList.map((text, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index + textList.length + middleList.length) * 0.1 }} // Add delay relative to index and offset by textList.length and middleList.length
          >
            {text}
          </motion.div>
        ))}
      </>
    );
  };
  export default ListAnimationComponent;
