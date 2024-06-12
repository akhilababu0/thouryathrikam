import { useRef, useState } from "react";

export default function PersonalDetails({
  name,
  email,
  year,
  dept,
  onClick,
  loading,
}) {
  const [editClicked, seteditClicked] = useState(false);
  const [error, seterror] = useState(null);
  const ref = useRef(null);
  return (
    <div className="flex flex-col space-y-2 w-full px-3 py-2 bg-green-500 rounded-lg">
      <div className="flex justify-between">
        <h5>Personal Details</h5>
        <button
          className="px-2 py-1 bg-green-700 rounded-lg font-bold"
          onClick={() => {
            seteditClicked((prev) => !prev);
            seterror(false);
          }}
        >
          {editClicked ? "Cancel" : "Edit"}
        </button>
      </div>

      {editClicked ? (
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <div className="flex space-x-1">
            <label className="font-bold">Name :&nbsp; </label>
            <input
              ref={ref}
              className="outline-none bg-transparent border border-white rounded-lg px-2 h-6 text-xs w-7/12"
              defaultValue={name}
            />
          </div>
          <button
            className="h-8 w-24 bg-white text-green-500 rounded-md font-bold text-sm"
            onClick={() => onClick(ref.current.value, seterror)}
          >
            {loading ? "Loading" : "Save"}
          </button>
          {error && (
            <p className=" text-white font-bold">
              The name you entered doesn&apos;t match with the college mail id.
              If this is a mistake please contact through above number.
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <p className="w-full break-all">
            <span className="font-bold">Name :&nbsp; </span>
            {name}
          </p>

          <p className="w-full break-all">
            <span className="font-bold">Email :&nbsp; </span>
            {email}
          </p>
          <p className="w-full break-all">
            <span className="font-bold">Year :&nbsp; </span>
            {year}
          </p>
          <p className="w-full break-all">
            <span className="font-bold">Department :&nbsp; </span>
            {dept}
          </p>
        </div>
      )}
    </div>
  );
}
