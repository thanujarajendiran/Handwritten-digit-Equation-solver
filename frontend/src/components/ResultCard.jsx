import { Calculator, CheckCircle , Download} from "lucide-react";

function ResultCard({ result }) {

  if (!result) return null;
function downloadResult() {

  const content = `
AI Handwritten Equation Solver

Recognized Equation:
${result.equation}

Answer:
${result.answer}
`;

  const blob = new Blob([content], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "equation_result.txt";

  link.click();

  URL.revokeObjectURL(url);

}

  return (
    <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <CheckCircle
          size={34}
          className="text-green-400"
        />

        <h2 className="text-3xl font-bold">
          AI Result
        </h2>

      </div>

      <div className="space-y-6">

        <div className="bg-black/20 rounded-2xl p-5">

          <p className="text-gray-400 text-sm">
            Recognized Equation
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {result.equation}
          </h2>

        </div>

        <div className="bg-purple-600 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <Calculator />

            <h3 className="text-xl font-semibold">
              Answer
            </h3>

          </div>

          <h1 className="text-5xl font-bold mt-4">
            {result.answer}
          </h1>

        </div>
        <div className="mt-6">

         <button
           onClick={downloadResult}
           className="w-full bg-green-600 hover:bg-green-700 rounded-2xl py-4 font-bold text-lg flex items-center justify-center gap-3 transition"
         >
          <Download size={22} />
          Download Result
         </button>

        </div>

      </div>

    </div>
  );
}

export default ResultCard;