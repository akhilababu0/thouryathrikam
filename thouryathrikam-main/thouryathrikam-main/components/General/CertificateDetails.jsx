import CertificateEventWise from "./CertificateEventWise";

export default function CertificateDetails({
  type,
  data,
  participant,
  year,
  dept,
}) {
  return (
    <div className="flex flex-col space-y-2 w-full  border border-zinc-800 shadow-2xl shadow-zinc-800 rounded-xl p-4">
      <h5 className="text-center">{type}</h5>

      <div className="flex flex-col space-y-4">
        {data?.event_1 && (
          <CertificateEventWise
            name={participant}
            year={year}
            dept={dept}
            event={data?.event_1?.name}
            result={data?.event_1?.result}
            id={data?.event_1?.cert}
          />
        )}
        {data?.event_2 && (
          <CertificateEventWise
            name={participant}
            year={year}
            dept={dept}
            event={data?.event_2?.name}
            result={data?.event_2?.result}
            id={data?.event_2?.cert}
          />
        )}
        {data?.event_3 && (
          <CertificateEventWise
            name={participant}
            year={year}
            dept={dept}
            event={data?.event_3?.name}
            result={data?.event_3?.result}
            id={data?.event_3?.cert}
          />
        )}
        {data?.event_4 && (
          <CertificateEventWise
            name={participant}
            year={year}
            dept={dept}
            event={data?.event_4?.name}
            result={data?.event_4?.result}
            id={data?.event_4?.cert}
          />
        )}
        {data?.event_5 && (
          <CertificateEventWise
            name={participant}
            year={year}
            dept={dept}
            event={data?.event_5?.name}
            result={data?.event_5?.result}
            id={data?.event_5?.cert}
          />
        )}
        {data?.event_6 && (
          <CertificateEventWise
            name={participant}
            year={year}
            dept={dept}
            event={data?.event_6?.name}
            result={data?.event_6?.result}
            id={data?.event_6?.cert}
          />
        )}
      </div>
    </div>
  );
}
