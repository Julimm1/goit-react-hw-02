import s from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.options}>
      <button
        onClick={() => updateFeedback("good")}
        className={s.btn}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={s.btn}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className={s.btn}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={s.btn} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
