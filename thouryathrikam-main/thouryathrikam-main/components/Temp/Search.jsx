import { useRef } from "react";

export default function Search({ setfilterd, data }) {
  const ref = useRef();

  function filterByName() {
    if (ref.current.value.length < 3) {
      setfilterd(data);
      return;
    }
    let ar = [];
    data.forEach((el) => {
      if (el.name.toLowerCase().startsWith(ref.current.value.toLowerCase()))
        ar.push(el);
    });
    console.log(ar);
    setfilterd(ar);
  }

  return (
    <div className="relative">
      <input
        className="btn placeholder:text-blue-400"
        placeholder="Search here..."
        ref={ref}
      />
      <span
        className="absolute top-0.5 right-0.5 w-24 h-10 bg-white text-blue-800 flex justify-center items-center rounded-full font-bold cursor-pointer "
        onClick={filterByName}
      >
        Search
      </span>
    </div>
  );
}
