import { History } from "lucide-react";

function HistoryPanel({ history }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

      <div className="flex items-center gap-2 mb-5">
        <History className="text-purple-400" />
        <h2 className="text-2xl font-bold">History</h2>
      </div>

      {history.length === 0 ? (
        <p className="text-gray-400">
          No equations solved yet.
        </p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="bg-black/20 rounded-xl p-4 mb-3"
          >
            <p>
              <strong>Equation:</strong> {item.equation}
            </p>

            <p>
              <strong>Answer:</strong> {item.answer}
            </p>
          </div>
        ))
      )}
      <button
        onClick={() => localStorage.removeItem("history")}
        className="mt-4 w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg"
      >
       Clear History
      </button>

    </div>
  );
}

export default HistoryPanel;