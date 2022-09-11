import Message from "../components/atoms/Message"
import Form from "../components/molecules/Form"

const Home = () => {
  return (
    <div className="layout">
      <div className="main-container">
        <div className="main-container__section-1">
          <Form />
        </div>
        <div className="main-container__section-2">
          <Message state = {true}/>
        </div>
        <div className="main-container__section-3">
          <Message state={false} />
        </div>
      </div>
    </div>
  )
}

export default Home