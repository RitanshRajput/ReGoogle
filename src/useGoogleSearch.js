// this is a custom hook 
import react, {useEffect, useState} from "react"
import API_KEY from "./Keys"

const CONTEXT_KEY = "73bcfaa9398774ad6" ;

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";


const useGoogleSearch =  (term) => {
    const [data, setData] = useState(null) ;

    useEffect(() => {
        const fetchData = async () => {
            fetch( `${BASE_URL}?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then((response)=> response.json())
            .then((result)=> {
                console.log(result);
                setData(result);
            })
        };
        fetchData() ;
    },[term])

    return {data}; 
}

export default useGoogleSearch ;

