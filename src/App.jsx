import { useState, useEffect } from "react";
import "./App.css";
import "modern-normalize";

import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  // Ініціалізація стану з localStorage або за замовчуванням
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );
  // Синхронізація стану з localStorage
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  // Обчислення загальної кількості відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  // Обчислення відсотка позитивних відгуків
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  // Функція для оновлення фідбеку
  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };
  // Функція для скидання фідбеку
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback");
  };
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
