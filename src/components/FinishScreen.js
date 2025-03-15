function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        {0 < percentage && percentage < 20 && <span>🤦‍♂️</span>}
        {21 < percentage && percentage < 40 && <span>😒</span>}
        {41 < percentage && percentage < 60 && <span>🙂</span>}
        {61 < percentage && percentage < 80 && <span>😃</span>}
        {81 < percentage && percentage < 99 && <span>😁</span>}
        {percentage === 100 && <span>🏅</span>}
        You scored <strong>{points}</strong> out of {maxPoints} (
        {percentage.toFixed(2)}%)
      </p>
      <p className="highscore">Your highscore is {highscore}!</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
