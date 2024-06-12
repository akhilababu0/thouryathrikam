import { useRef, useState } from "react";
import { supabase } from "supabase";

export default function Add({ values, event, student, type }) {
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(false);
  const eventRef = useRef();
  const resultRef = useRef();

  async function saveNewEvent() {
    setloading(true);
    const update = `{"event_${event}":${
      eventRef.current.value
    }, "result_${event}":${
      resultRef.current.value == 0 ? "null" : resultRef.current.value
    }}`;
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
        <div className="flex text-xs">
          <button
            className="bg-green-600 w-14 py-2 text-white rounded-full"
            onClick={() => setopen(true)}
          >
            Add
          </button>
        </div>
      ) : (
        <div className="flex flex-col text-xs space-y-2">
          <select
            className="w-40 h-8 border border-lime-400 text-zinc-900 bg-lime-100 text-xs px-2 rounded-full"
            name="events"
            ref={eventRef}
          >
            {values?.map((item) => (
              <option key={item.id} value={item.id}>
                {item?.name}
              </option>
            ))}
          </select>
          <select
            className="w-12 h-8 border border-lime-400 text-zinc-900 bg-lime-100 px-4 rounded-full text-base"
            name="result"
            ref={resultRef}
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
                onClick={saveNewEvent}
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
