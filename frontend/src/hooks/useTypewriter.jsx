import { useState, useEffect } from "react";

const useWipeEffect = (words, wipeSpeed = 200, delay = 3000) => { // Increased wipeSpeed to 200ms
  const [index, setIndex] = useState(0);    // Tracks which word to show
  const [subIndex, setSubIndex] = useState(0); // Tracks how many characters of the word are shown
  const [pause, setPause] = useState(false);   // Used to introduce a delay between words

  useEffect(() => {
    if (index === words.length) return; // Stops if all words are shown

    if (subIndex === words[index].length) {
      // Word has been fully displayed, so pause
      setPause(true);
      setTimeout(() => {
        setPause(false); // Reset pause
        setSubIndex(0);  // Reset character display for the next word
        setIndex((prev) => (prev + 1) % words.length); // Move to the next word
      }, delay);
    } else if (!pause) {
      // Incrementally increase the number of characters displayed (wipe effect)
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, wipeSpeed);

      return () => clearTimeout(timeout); // Clean up timeout to prevent memory leaks
    }
  }, [subIndex, index, words, wipeSpeed, delay, pause]);

  return words[index].substring(0, subIndex); // Return the word up to the visible characters
};

export default useWipeEffect;