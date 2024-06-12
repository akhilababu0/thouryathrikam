import { filterByEvent } from "@/util/temp";

export default function FilterYear({ setfilterd, data, yearRef, eventRef }) {
  return (
    <>
      <select
        className="btn"
        ref={yearRef}
        name="year"
        defaultValue={"all"}
        onChange={() => filterByEvent(setfilterd, data, eventRef, yearRef)}
      >
        <option value="all">All Year</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </>
  );
}
