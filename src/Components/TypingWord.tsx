import { useState, useEffect } from "react"
import { Words } from "./data";


export const TypingWord = () => {

  const INITIAL_TIME = 60;
  const WORDS_PER_BLOCK = 10;

  const [words] = useState<string[]>(Words);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentBlockIndex, setCurrentBlockIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(INITIAL_TIME);
  const [score, setScore] = useState<number>(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setDisplayedWords(words.slice(0, WORDS_PER_BLOCK));
  }, [words]);

  const startGame = () => {
    setCurrentBlockIndex(0);
    setDisplayedWords(words.slice(0, WORDS_PER_BLOCK));
    setPlaying(true);
    setScore(0);
    setInputText("");
    setCurrentTime(INITIAL_TIME);
    setCurrentWordIndex(0);
  };

  useEffect(() => {
    if (playing && currentTime > 0) {
      const timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (currentTime === 0) {
      setPlaying(false);
    }
  }, [playing, currentTime]);

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    if (e.target.value.trim() === displayedWords[currentWordIndex]) {
      setScore((prevScore) => prevScore + 1);
      const nextWordIndex = currentWordIndex + 1;

      if (nextWordIndex < WORDS_PER_BLOCK) {
        setCurrentWordIndex(nextWordIndex);
      } else {
        const nextBlockStart = currentBlockIndex + WORDS_PER_BLOCK;
        const nextBlockEnd = nextBlockStart + WORDS_PER_BLOCK;

        if (nextBlockStart < words.length) {
          setDisplayedWords(words.slice(nextBlockStart, nextBlockEnd));
          setCurrentBlockIndex(nextBlockStart);
          setCurrentWordIndex(0);
        } else {
          setPlaying(false);
        }
      }

      setInputText("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-800 p-6">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-500 mb-4">Typing Game</h1>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">
            ⏱ <span className="font-semibold">{currentTime}s</span>
          </p>
          <p className="text-lg">
            🏆 <span className="font-semibold">{score}</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {displayedWords.map((word, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-md text-sm ${
                index === currentWordIndex && playing
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleTyping}
          placeholder="Start typing..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          disabled={!playing}
        />
        <button
          onClick={startGame}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          {playing ? "Restart Game" : "Start Game"}
        </button>
      </div>
    </div>
  );
}
