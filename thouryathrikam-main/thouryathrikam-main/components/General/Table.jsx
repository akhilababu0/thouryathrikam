import { useRouter } from "next/router";
import { forwardRef } from "react";

export default function Table({ data, event, ref }) {
  const router = useRouter();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Dept.</th>
          <th>Event</th>
          <th>Participation/Prize</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item?.Email}>
            <td>{item?.name}</td>
            <td>{item?.year}</td>
            <td>{item?.dept}</td>
            <td>
              <ul className="list-disc px-4">
                {item.event_1 == event && (
                  <li
                    className="underline text-green-500 cursor-pointer hover:text-black"
                    onClick={() =>
                      router.push(
                        "/certificate/view/" + item.index.toString() + "/" + "1"
                      )
                    }
                  >
                    {item.event_1}
                  </li>
                )}
                {item.event_2 == event && (
                  <li
                    className="underline text-green-500 cursor-pointer hover:text-black"
                    onClick={() =>
                      router.push(
                        "/certificate/view/" + item.index.toString() + "/" + "2"
                      )
                    }
                  >
                    {item.event_2}
                  </li>
                )}
                {item.event_3 == event && (
                  <li
                    className="underline text-green-500 cursor-pointer hover:text-black"
                    onClick={() =>
                      router.push(
                        "/certificate/view/" + item.index.toString() + "/" + "3"
                      )
                    }
                  >
                    {item.event_3}
                  </li>
                )}
                {item.event_4 == event && (
                  <li
                    className="underline text-green-500 cursor-pointer hover:text-black"
                    onClick={() =>
                      router.push(
                        "/certificate/view/" + item.index.toString() + "/" + "4"
                      )
                    }
                  >
                    {item.event_4}
                  </li>
                )}
                {item.event_5 == event && (
                  <li
                    className="underline text-green-500 cursor-pointer hover:text-black"
                    onClick={() =>
                      router.push(
                        "/certificate/view/" + item.index.toString() + "/" + "5"
                      )
                    }
                  >
                    {item.event_5}
                  </li>
                )}
                {item.event_6 == event && (
                  <li
                    className="underline text-green-500 cursor-pointer hover:text-black"
                    onClick={() =>
                      router.push(
                        "/certificate/view/" + item.index.toString() + "/" + "6"
                      )
                    }
                  >
                    {item.event_6}
                  </li>
                )}
              </ul>
            </td>
            <td>
              <ul className="list-disc px-4">
                {item.event_1 == event && (
                  <li className="">
                    {!item.result_1 ? "Participation" : item.result_1}
                  </li>
                )}
                {item.event_2 == event && (
                  <li className="">
                    {!item.result_2 ? "Participation" : item.result_2}
                  </li>
                )}
                {item.event_3 == event && (
                  <li className="">
                    {!item.result_3 ? "Participation" : item.result_3}
                  </li>
                )}
                {item.event_4 == event && (
                  <li className="">
                    {!item.result_4 ? "Participation" : item.result_4}
                  </li>
                )}
                {item.event_5 == event && (
                  <li className="">
                    {!item.result_5 ? "Participation" : item.result_5}
                  </li>
                )}
                {item.event_6 == event && (
                  <li className="">
                    {!item.result_6 ? "Participation" : item.result_6}
                  </li>
                )}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
