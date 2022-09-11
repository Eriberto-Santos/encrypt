const Form = () => {

    const handleForm = e => {
        e.preventDefault()
    }

    return (
        <form className="form" onSubmit={handleForm}>
            <textarea name="message" id="message" cols="30" rows="10" className="input" placeholder="Write your message"></textarea>
            <button className="button">Send Message</button>
        </form>
    )
}

export default Form