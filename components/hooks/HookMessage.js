import { useContext } from "react"
import ContextMessage from "../context/contextMessage"

const useMessage = () => {
    return useContext(ContextMessage)
}

export default useMessage