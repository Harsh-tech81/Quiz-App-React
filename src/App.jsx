import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import QuizProvider from "./context/QuizContext";
import Home from "./pages/Home";
const Result = lazy(() => import("./pages/Result"));
import Quiz from "./pages/Quiz";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <>
      <QuizProvider>
        <Router>
          <Suspense
            fallback={
              <h2 className="text-center mt-5">Loading Page Please Wait...</h2>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </Suspense>
        </Router>
      </QuizProvider>
    </>
  );
}

export default App;
