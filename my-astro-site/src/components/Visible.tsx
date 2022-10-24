import { useState } from "preact/hooks";

function Visible() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="border p-6">
      <div className="text-lg">{count}</div>

      <button onClick={() => setCount(state => state + 1)} className="border p-4 bg-red-500">
        Increment
      </button>
    </div>
  )
}

export default Visible