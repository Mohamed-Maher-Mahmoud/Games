
import { useEffect , useState } from "react";
import axios from 'axios'







 export default function useHook(url) {


    const [allApi, setallApi] = useState([]);
    async function getApi(){
        let {data} =await axios.get(url,{
            headers : {
                'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        setallApi(data)
    }
    useEffect(()=>{
getApi();

},[])


    return {allApi }
}