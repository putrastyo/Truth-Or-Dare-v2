import { useEffect, useState } from "react";
import { TodType, tod } from "./data/tod";
import backCard from "./assets/back-card.png";

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [question, setQuestion] = useState("");
  const option = ["truth", "dare"];
  const randIndex = Math.floor(Math.random() * option.length);

  const card1Value = option[randIndex];
  const card2Value = card1Value === "truth" ? "dare" : "truth";

  useEffect(() => {
    const getQuestions = tod[userChoice as keyof TodType];
    if (getQuestions !== undefined) {
      const randQuestion = Math.floor(Math.random() * getQuestions.length);
      const getQuestion = getQuestions[randQuestion];
      console.log(getQuestion);
      setQuestion(getQuestion);
    }
  }, [userChoice]);

  return (
    <div className="flex min-h-dvh flex-col justify-center items-center bg-slate-200">
      <div className="w-full h-dvh max-w-xl mx-auto bg-white md:border-x-4 md:border-slate-400 p-8">
        <h3 className="text-center font-bold text-gray-900 mb-4">
          CHOOSE ONE CARD
        </h3>
        <div className="flex justify-center gap-4">
          {/* CARD 1 */}
          <div
            className="group w-32 h-40 [perspective:1000px] cursor-pointer"
            onClick={() => setUserChoice(card1Value)}
          >
            <div className="relative h-full w-full rounded shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full">
                <img src={backCard} className="w-full h-full rounded" />
              </div>
              <div className="absolute h-full w-full rounded text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="min-h-full flex justify-center items-center">
                  <h4 className="text-lg font-bold">Truth</h4>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="group w-32 h-40 [perspective: 1000px] cursor-pointer hover:scale-105 transition-transform duration-150"
            onClick={() => setUserChoice(card2Value)}
          >
            <div className="relative h-full w-full rounded shadow">
              <div className="absolute inset-0">
                <img src={backCard} className="w-full h-full rounded" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>You Got: {userChoice}</h2>
          <p>{question}</p>
        </div>
        <button>RESTART</button>
      </div>
    </div>
  );
};

export default App;
