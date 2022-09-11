import { useState } from "react"
import useMessage from "../hooks/HookMessage"

const Form = () => {
    const { encrypt } = useMessage()
    const initialState = { message: '' }
    const [data, setData] = useState(initialState)

    const handleForm = e => {
        e.preventDefault()
        if (e.target.message.value == '') {
            alert('The input is empty')
        } else {
            encrypt(data.message)
            setData(initialState)
        }

    }

    const handleOnChange = ({ target: { name, value } }) => {

        setData({ ...data, [name]: value })
    }

    return (
        <form className="form" onSubmit={handleForm}>
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="input"
                placeholder="Write your message"
                onChange={handleOnChange}
                value={data.message}
            >
            </textarea>
            <button className="button">Send Message</button>
        </form>
    )
}

export default Form