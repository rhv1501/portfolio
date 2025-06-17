import { useState } from "react";
import {
  FaCoffee,
  FaBug,
  FaCode,
  FaTrophy,
  FaQuoteLeft,
  FaGamepad,
} from "react-icons/fa";
import { funFacts, devFacts, devQuotes } from "../constants";

const iconMap = {
  FaCoffee: (props) => (
    <FaCoffee className="text-2xl text-orange-400" {...props} />
  ),
  FaCode: (props) => <FaCode className="text-2xl text-green-400" {...props} />,
  FaBug: (props) => <FaBug className="text-2xl text-red-400" {...props} />,
  FaTrophy: (props) => (
    <FaTrophy className="text-2xl text-yellow-400" {...props} />
  ),
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function DeveloperShowcase() {
  const [fact, setFact] = useState(getRandom(devFacts));
  const [quote, setQuote] = useState(getRandom(devQuotes));
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timer, setTimer] = useState(10);

  // Simple clicker mini-game
  function startGame() {
    setScore(0);
    setTimer(10);
    setGameActive(true);
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setGameActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-25 md:mt-35 c-space">
      <h2 className="text-heading text-center">Developer Showcase</h2>
      {/* Fun Developer Stats */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 justify-items-center">
        {funFacts.map((fact, idx) => {
          const Icon = iconMap[fact.icon];
          return (
            <div
              key={idx}
              className="flex flex-col items-center bg-gradient-to-b from-indigo to-storm rounded-xl p-3 md:p-4 shadow-md min-h-[120px] w-full"
              style={{ minWidth: 0 }}
            >
              {Icon && <Icon />}
              <span className="text-xl md:text-2xl font-bold mt-2 break-words text-center max-w-full animate-pulse">
                {fact.value}
              </span>
              <span className="text-xs md:text-sm text-neutral-300 mt-1 text-center break-words max-w-full">
                {fact.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Did You Know? Developer Facts */}
      <div className="w-full max-w-3xl bg-gradient-to-r from-royal to-lavender rounded-xl p-6 flex flex-col items-center shadow-md mt-8">
        <span className="text-lg font-semibold mb-2">Did You Know?</span>
        <span className="text-base text-center break-words w-full">{fact}</span>
        <button
          className="mt-3 px-3 py-1 text-xs rounded-full bg-black/30 hover:bg-black/50 text-white"
          onClick={() => setFact(getRandom(devFacts))}
        >
          Show Another
        </button>
      </div>

      {/* Favorite Quotes */}
      <div className="w-full max-w-3xl bg-gradient-to-l from-indigo to-storm rounded-xl p-6 flex flex-col items-center shadow-md mt-8">
        <FaQuoteLeft className="text-2xl text-lavender mb-2" />
        <span className="italic text-center break-words w-full">
          &ldquo;{quote.quote}&rdquo;
        </span>
        <span className="mt-2 text-xs text-neutral-400">- {quote.author}</span>
        <button
          className="mt-3 px-3 py-1 text-xs rounded-full bg-black/30 hover:bg-black/50 text-white"
          onClick={() => setQuote(getRandom(devQuotes))}
        >
          New Quote
        </button>
      </div>

      {/* Mini-Game: Clicker */}
      <div className="w-full max-w-3xl bg-gradient-to-r from-fuchsia to-orange rounded-xl p-6 flex flex-col items-center shadow-md mt-8">
        <div className="flex items-center gap-2 mb-2">
          <FaGamepad className="text-2xl text-white" />
          <span className="font-bold text-lg">Mini-Game: Clicker!</span>
        </div>
        <span className="mb-2 text-sm text-neutral-200 text-center break-words w-full">
          How many clicks can you get in 10 seconds?
        </span>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="px-6 py-2 rounded-full bg-black/40 hover:bg-black/70 text-white text-lg font-bold"
            disabled={!gameActive}
            onClick={() => setScore((s) => s + 1)}
          >
            Click Me!
          </button>
          <span className="text-2xl font-bold">{score}</span>
        </div>
        <div className="mt-2 text-xs text-neutral-300">Time Left: {timer}s</div>
        <button
          className="mt-3 px-3 py-1 text-xs rounded-full bg-black/30 hover:bg-black/50 text-white"
          onClick={startGame}
          disabled={gameActive}
        >
          {gameActive ? "Go!" : "Start Game"}
        </button>
      </div>
    </div>
  );
}
