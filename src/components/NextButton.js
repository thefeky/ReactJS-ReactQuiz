function NextButton({ dispatch, index, numQuestions }) {
  return (
    <div>
      {index + 1 !== numQuestions ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finishQuiz" })}
        >
          Finish Quiz
        </button>
      )}
    </div>
  );
}

export default NextButton;
