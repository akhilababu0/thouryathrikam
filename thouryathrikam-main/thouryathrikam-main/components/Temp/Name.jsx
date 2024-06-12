import { useRef, useState } from "react";
import { supabase } from "supabase";

export default function Name({ name, id, values, event, student, type }) {
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(false);
  const ref = useRef();

  async function saveEvent() {
    setloading(true);
    const update = `{"event_${event}":${ref.current.value}}`;
    const { error } = await supabase
      .from(type)
      .update(JSON.parse(update))
      .eq("id", student);
    if (!error) {
      setloading(false);
      setopen(false);
    }
  }

  async function deleteEvent() {
    setloading(true);
    const update = `{"event_${event}":null}`;
    const { error } = await supabase
      .from(type)
      .update(JSON.parse(update))
      .eq("id", student);
    if (!error) {
      setloading(false);
    }
  }

  return (
    <>
      {!open ? (
        <div className="flex flex-col text-xs space-y-2 ">
          <p className="font-bold">{name}</p>
          {loading ? (
            <p className="text-blue-600">Loading...</p>
          ) : (
            <div className="flex space-x-3">
              <button
                className="bg-red-600 w-14 py-2 text-white rounded-full"
                onClick={deleteEvent}
              >
                Delete
              </button>
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
        <div className="flex flex-col text-xs space-y-2">
          <select
            className="w-40 h-8 border border-zinc-900 text-zinc-900 bg-lime-100 text-xs px-1.5 rounded-lg"
            name={name}
            defaultValue={id}
            ref={ref}
          >
            {values?.map((item) => (
              <option key={item.id} value={item.id}>
                {item?.name}
              </option>
            ))}
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
