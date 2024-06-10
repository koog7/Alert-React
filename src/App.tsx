import './App.css'
import Modal from "./components/Modal.tsx";
import {useState} from "react";
import Alert from "./components/Alert.tsx";

const App = () => {
    const [ModalShow , setModalShow] = useState(false)
    const makeFalse = () => {
      setModalShow(false)
    }
    return (
        <>
            <button className={'w-25 btn btn-primary'} onClick={() => setModalShow(true)}>Модальное окно</button>
            <Modal onClose={makeFalse} title={'Title'} show={ModalShow}><p>This is modal content</p></Modal>
            <Alert type="success">This is a success type alert</Alert>
            <Alert type="warning" onDismiss={true}>This is a warning type alert</Alert>
            <Alert type="info" onDismiss={true}>This is a info type alert</Alert>
            <Alert type="dark">This is a dark type alert</Alert>
        </>
    )
};

export default App
