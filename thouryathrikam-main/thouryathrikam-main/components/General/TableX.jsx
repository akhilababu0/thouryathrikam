import { forwardRef } from "react";

const TableX = forwardRef(function TableX({ data, event }, ref) {
  return (
    <table className="hidden" ref={ref}>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Course</th>
          <th>Year</th>
          <th>Deptartment</th>
          <th>Event Name</th>
          <th>Result(Participation/Prize)</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item?.Email}>
            <td>{item?.Email}</td>
            <td>{item?.name}</td>
            <td>B.Tech</td>
            <td>{item?.year}</td>
            <td>{item?.dept}</td>
            <td>
              {item?.event_1 == event && item?.event_1}
              {item?.event_2 == event && item?.event_2}
              {item?.event_3 == event && item?.event_3}
              {item?.event_4 == event && item?.event_4}
              {item?.event_5 == event && item?.event_5}
              {item?.event_6 == event && item?.event_6}
            </td>
            <td>
              {item?.event_1 == event &&
                (!item?.result_1 ? "Participation" : item?.result_1)}
              {item?.event_2 == event &&
                (!item?.result_2 ? "Participation" : item?.result_2)}
              {item?.event_3 == event &&
                (!item?.result_3 ? "Participation" : item?.result_3)}
              {item?.event_4 == event &&
                (!item?.result_4 ? "Participation" : item?.result_4)}
              {item?.event_5 == event &&
                (!item?.result_5 ? "Participation" : item?.result_5)}
              {item?.event_6 == event &&
                (!item?.result_6 ? "Participation" : item?.result_6)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default TableX;
