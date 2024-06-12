export function filterByEvent(data, event, type, seteventFiltered, setfiltered){
    let ar =[]
    data.forEach((el, index) => {
      for (let i = 1; i <= 6; i++) {
        if(el[`event_${i}`] == event) {
          el.index = index
          ar.push(el)
        }
      }
    })
    seteventFiltered(ar)
    filterByPrize(ar, event, type, setfiltered)
}

export function filterByPrize(data, event, type, setfiltered){

    let ar = []
    if(type == 'participation'){
        data.forEach((el) => {
            for (let i = 1; i <= 6; i++) {
                if(el[`event_${i}`] == event && !el[`result_${i}`]) {
                    ar.push(el)
                    break
                }
            }
        })
    }else if(type == 'prize') {
        data.forEach((el) => {
            for (let i = 1; i <= 6; i++) {
              if(el[`event_${i}`] == event && el[`result_${i}`]) {
                ar.push(el)
                break
              }
            }
        })
    }else {
        ar = data
    }
    
    setfiltered(ar)
}






