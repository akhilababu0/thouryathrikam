import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import Certificate from "./Certificate";

export default function CertificateEventWise({
  event,
  name,
  year,
  dept,
  result,
  id,
}) {
  const [show, setshow] = useState(false);

  return (
    <div className="flex flex-col items-center w-full bg-green-500 text-white odd:bg-yellow-500 rounded-lg px-3 py-2 ">
      <p className="w-full break-all font-bold text-base">{event}</p>
      <p className="w-full break-all font-light text-base">
        {result == null || result == 0
          ? "Participation"
          : result == 1
          ? "1st"
          : result == 2
          ? "2nd"
          : result == 3 && "3rd"}
      </p>

      {!show && (
        <button
          className="text-black bg-white px-4 font-bold py-2 rounded-md mt-2"
          onClick={() => setshow((prev) => !prev)}
        >
          Generate Certificate
        </button>
      )}

      {show && (
        <PDFDownloadLink
          document={
            <Certificate
              name={name}
              prize={result}
              dept={dept}
              year={year}
              event={event}
              id={id}
            />
          }
          fileName={`THM${id}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            !url ? (
              <button className="text-black bg-white font-bold px-4 py-2 rounded-md mt-2">
                Loading Document...
              </button>
            ) : (
              <button className="text-black bg-white font-bold px-4 py-2 rounded-md mt-2">
                Download
              </button>
            )
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}
