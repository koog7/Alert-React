import './App.css'
import Modal from "./components/Modal.tsx";
import {useState} from "react";

function App() {
    const [ModalShow , setModalShow] = useState(false)

    const makeFalse = () => {
      setModalShow(false)
    }
    return (
        <>
            <button className={'w-25 btn btn-primary'} onClick={() => setModalShow(true)}>Модальное окно</button>
            <Modal onClose={makeFalse} title={'Title'} show={ModalShow}><p>This is modal content</p></Modal>
        </>
    )
}

export default App
