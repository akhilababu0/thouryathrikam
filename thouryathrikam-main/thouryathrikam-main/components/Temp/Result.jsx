import { useRef, useState } from "react";
import { supabase } from "supabase";

export default function Result({ name, type, event, student }) {
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(false);

  const ref = useRef();

  async function saveEvent() {
    setloading(true);
    const update = `{"result_${event}":${ref.current.value}}`;
    const { error } = await supabase
      .from(type)
      .update(JSON.parse(update))
      .eq("id", student);
    if (!error) {
      setloading(false);
      setopen(false);
    }
  }

  return (
    <>
      {!open ? (
        <div className="flex flex-col text-xs space-y-2 items-center">
          <p className="text-base text-center font-bold">{name ? name : 0}</p>
          {loading ? (
            <p className="text-blue-600">Loading...</p>
          ) : (
            <div className="flex space-x-3">
              <button
                className="bg-blue-600 w-14 py-2 text-white rounded-full"
                onClick={() => setopen(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col text-xs space-y-2 items-center">
          <select
            className="w-10 h-8 border border-zinc-900 text-zinc-900 bg-lime-100 px-1.5 rounded-full text-base"
            name={name}
            defaultValue={name}
            ref={ref}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          {loading ? (
            <p className="text-blue-600">Loading...</p>
          ) : (
            <div className="flex space-x-4">
              <button
                className="bg-red-600 w-14 py-2 text-white rounded-full"
                onClick={() => setopen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 w-14 py-2 text-white rounded-full"
                onClick={saveEvent}
              >
                Save
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
