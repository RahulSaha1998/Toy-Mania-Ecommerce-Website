import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `TOY Mania | ${title}`;
    },[title])
}
export default useTitle;