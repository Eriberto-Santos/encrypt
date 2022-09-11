import { createContext, useState } from 'react'
import cryptoJs from 'crypto-js'
import { v4 as uuidv4 } from 'uuid'
const ContextMessage = createContext()


const ProviderMessage = ({ children }) => {
    const [messageEncrypt, setMessageEncrypt] = useState([])
    const [messageDecrypted, setMessageDecrypted] = useState([])
    console.log(messageDecrypted);
    const encrypt = (message) => {
        const Encrypt = cryptoJs.AES.encrypt(message, '123').toString()
        setMessageEncrypt([...messageEncrypt, { id: uuidv4(), msj: Encrypt, code:'123' }])
    }

    const decrypt = (id) => {
       let result =  messageEncrypt.filter(el=> el.id == id)
       const decrypt = cryptoJs.AES.decrypt(result[0].msj, result[0].code)
        const messageDecrypt = decrypt.toString(cryptoJs.enc.Utf8)
        setMessageDecrypted([{id: uuidv4(), msj:messageDecrypt}])
    }

    const data = { encrypt, decrypt, messageEncrypt, messageDecrypted }
    return (
        <ContextMessage.Provider value={data}>
            {children}
        </ContextMessage.Provider>
    )
}

export {
    ProviderMessage
}
export default ContextMessage