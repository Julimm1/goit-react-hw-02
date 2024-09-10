import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.feedback}>
      <ul>
        <li className={s.item}>Good: {feedback.good}</li>
        <li className={s.item}>Neutral: {feedback.neutral}</li>
        <li className={s.item}>Bad: {feedback.bad}</li>
        <li className={s.item}>Total: {totalFeedback}</li>
        <li className={s.item}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
