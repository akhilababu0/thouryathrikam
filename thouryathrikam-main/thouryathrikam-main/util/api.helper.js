import axios from 'axios'

export const submitForm = async (data, setmessage, setloading) => {
    setloading(true)
    await axios.post('/api/form',{
        data : data,
        headers: { 'Content-Type':'multipart/form-data' }
      }).then(res => {
        console.log(res.data);
        setmessage(res.data.message)
      }).catch(err => {
        setmessage(err.message)
        console.log(err);
      }).finally(() =>
        setloading(false)
      )
}