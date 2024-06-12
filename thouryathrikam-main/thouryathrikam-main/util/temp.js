export function filterByEvent(setfilterd, data, eventRef, yearRef) {
    if (eventRef.current.value == "all") {
      setfilterd(data);
      return;
    }
    let ar = [];
    data.forEach((el) => {
      for (let i = 1; i <= 6; i++) {
        if (el[`event_${i}`]?.id == eventRef.current.value){
           ar.push(el)
        }
      }
    });
    filterByYear(setfilterd, ar, yearRef);
  }

  function filterByYear(setfilterd, data, yearRef) {
    if (yearRef.current.value == "all") {
      setfilterd(data);
      return;
    }
    let ar = [];
    data?.forEach((el) => {
      if (parseFloat(el?.year) == yearRef.current.value) ar.push(el);
    });
    setfilterd(ar);
  }