import { useEffect, useState } from "react";
import { TodType, tod } from "./data/tod";
import backCard from "./assets/back-card.png";

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [question, setQuestion] = useState("");
  const [isCard1Flipped, setIsCard1Flipped] = useState(false);
  const [isCard2Flipped, setIsCard2Flipped] = useState(false);

  const option = ["truth", "dare"];
  const randIndex = Math.floor(Math.random() * option.length);

  const card1Value = option[randIndex];
  const card2Value = card1Value === "truth" ? "dare" : "truth";

  useEffect(() => {
    const getQuestions = tod[userChoice as keyof TodType];
    if (getQuestions !== undefined) {
      const randQuestion = Math.floor(Math.random() * getQuestions.length);
      const getQuestion = getQuestions[randQuestion];
      setQuestion(getQuestion);
    }
  }, [userChoice]);

  return (
    <div className="flex min-h-dvh flex-col justify-center items-center bg-slate-200">
      <div className="w-full h-dvh max-w-xl mx-auto bg-white md:border-x-4 md:border-slate-400 p-8">
        <div className="mb-4 text-center">
          <h3 className="font-extrabold text-gray-900">CHOOSE ONE CARD</h3>
          <small className="text-sm text-gray-600">
            These cards will determine truth or dare choices.
          </small>
        </div>
        <div className="flex justify-center gap-4">
          {/* CARD 1 */}
          <div
            className="group w-32 h-40 [perspective:1000px] cursor-pointer"
            onClick={() => {
              setIsCard1Flipped((prevIsFlipped) => !prevIsFlipped);
              setUserChoice(card1Value);
            }}
          >
            <div
              className={`relative h-full w-full rounded shadow transition-all duration-500 [transform-style:preserve-3d] ${
                isCard1Flipped && "[transform:rotateY(180deg)]"
              }`}
            >
              <div className="absolute w-full h-full">
                <img src={backCard} className="w-full h-full rounded" />
              </div>
              <div className="absolute h-full w-full rounded text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div
                  className={`min-h-full flex justify-center items-center bg-${
                    card1Value === "truth" ? "green" : "red"
                  }-600 text-white`}
                >
                  <h4 className="text-lg font-bold">{card1Value}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="group w-32 h-40 [perspective:1000px] cursor-pointer"
            onClick={() => {
              setIsCard2Flipped((prevIsFlipped) => !prevIsFlipped);
              setUserChoice(card1Value);
            }}
          >
            <div
              className={`relative h-full w-full rounded shadow transition-all duration-500 [transform-style:preserve-3d] ${
                isCard2Flipped && "[transform:rotateY(180deg)]"
              }`}
            >
              <div className="absolute w-full h-full">
                <img src={backCard} className="w-full h-full rounded" />
              </div>
              <div className="absolute h-full w-full rounded text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div
                  className={`min-h-full flex justify-center items-center bg-${
                    card2Value === "truth" ? "green" : "red"
                  }-600 text-white`}
                >
                  <h4 className="text-lg font-bold">{card2Value}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {userChoice !== "" ? (
          <div className="text-center mt-10">
            <h2 className="font-bold mb-4">
              {userChoice === "truth" ? "TRUTH QUESTIONS :" : "DARE FOR YOU :"}
            </h2>
            <div
              className={`p-4 border-2 border-${
                userChoice === "truth" ? "green" : "red"
              }-600 rounded mb-4`}
            >
              <p>{question}</p>
            </div>
            <button
              className="bg-neutral-900 text-white font-bold py-2 px-6 rounded"
              onClick={() => {
                setUserChoice("");
                setIsCard1Flipped(false);
                setIsCard2Flipped(false);
              }}
            >
              RESTART
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
