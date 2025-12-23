import { useState, useEffect } from "react";

function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);
const clearBoard = () => {
  localStorage.removeItem("leaderboard");
  setLeaderboard([]);
}
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(stored);
  }, []);

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p className="text-muted">
          No entries yet. Play the game to see your score here!
        </p>
      ) : (
        <table className="table table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.percentage}%</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn btn-danger mt-3"
      onClick={clearBoard}
      >Clear Leaderboard</button>
    </div>
  );
}

export default LeaderBoard;
