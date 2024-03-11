
import axios from "axios"

const API="https://newsapi.org/v2/everything?q=apple&from=2024-02-29&to=2024-02-29&sortBy=popularity&apiKey=e1899591e6ce4387986ef6ef2516e0d8"

export const getBusiness= async()=>{

    await axios.get(`${API}`).then(res=>{
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err)
    })
}
