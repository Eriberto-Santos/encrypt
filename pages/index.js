import useMessage from "../components/hooks/HookMessage"
import Form from "../components/molecules/Form"
import Message from "../components/atoms/Message"

const Home = () => {
  const { messageEncrypt, messageDecrypted, decrypt } = useMessage()
  return (
    <div className="layout">
      <div className="main-container">
        <div className="main-container__section-1">
          <Form />
        </div>
        <div className="main-container__section-2">
          {
            messageEncrypt && messageEncrypt.map((element) => {
              return (
                <Message state={true} text={element.msj} key={element.id} action={() => decrypt(element.id)} />
              )
            })
          }
        </div>
        <div className="main-container__section-3">
          {
            messageDecrypted && messageDecrypted.map((element) => {
              return (
                <Message state={false} text={element.msj} key={element.id} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home