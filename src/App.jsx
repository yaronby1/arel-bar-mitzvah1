import "./App.css";

function App() {
  return (
    <div className="container">
      {/* תמונה מתוך תיקיית public */}
      <img src="/invite.jpg" alt="הזמנה" className="invite-image" />

      {/* כפתור שמפנה לטופס גוגל */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSetOdblPGs4B4DVz20TAmqbw_eaCvZ97BxHnN0aNEaeCMNrMA/viewform?usp=dialog"
        target="_blank"
        rel="noreferrer"
      >
        <button className="submit">לטופס אישור הגעה</button>
      </a>
    </div>
  );
}

export default App;

