const Message = ({ state }) => {
    return (
        <div className="message">
            <span className="lock">
                {state ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="lock-icon" width="24" height="24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"></path></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="lock-icon-2" width="24" height="24"><path d="M18 10H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-7.939 5.499A2.002 2.002 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723V20h-2v-2.277a1.992 1.992 0 0 1-.939-2.224z"></path></svg>
                }
            </span>
            <p className={state ? 'text' : 'text-2'}>
                thisañsdkjfañsjdfñajsdfñjasldkfjlasjdfañlskjdflkñajsdfñlkjañsjkdfñalskjdf
            </p>
            <div className="options">
                {state ?
                    <button className="button">Decrypt</button>
                    :
                    <button className="button delete">Delete</button>
                }
            </div>
        </div>
    )
}

export default Message 