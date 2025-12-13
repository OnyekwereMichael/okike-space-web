import { useState, useEffect } from "react";

export default function TypingEffect({ text, speed = 120 }: { text: string, speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false); // track typing completion

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setFinished(true); // typing is done
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}{!finished && <span className="animate-pulse">|</span>}</span>;
}
