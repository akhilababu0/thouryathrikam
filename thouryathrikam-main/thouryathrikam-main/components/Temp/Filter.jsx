import { filterByEvent } from "@/util/temp";

export default function Filter({
  events,
  data,
  setfilterd,
  eventRef,
  yearRef,
}) {
  return (
    <>
      <select
        className="btn"
        ref={eventRef}
        name="events"
        defaultValue={"all"}
        onChange={() => filterByEvent(setfilterd, data, eventRef, yearRef)}
      >
        <option value="all">All events</option>
        {events?.map((item) => (
          <option key={item?.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
