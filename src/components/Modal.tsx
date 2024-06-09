import React from "react";

interface Props extends React.PropsWithChildren{
    show: boolean;
    title: string;
    onClose: VoidFunction;
}
const Modal: React.FC<Props> = ({show, title ,onClose, children}) => {
    return (
        <>
            <div className={'modal-backdrop show'} style={{display: show? 'block' : 'none'}} />
            <div className={'modal show'} style={{display: show? 'block' : 'none'}}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content p-3'}>
                        <div className={'modal-header p-3'}>
                            <h1 className={'modal-title fs-5'}>{title}</h1>
                            <button className={'ms-auto'} onClick={onClose}>X</button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;