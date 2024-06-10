import React, {useState} from "react";
interface Props extends React.PropsWithChildren{
    type:string;
    onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type , onDismiss,children}) => {
    const [display , setDisplay ] = useState(true)

    const makeFalse = () => {
        setDisplay(false);
        if (onDismiss) {
            onDismiss();
        }
    }

    return (
        display && (
            <div className={`mt-3 w-25 alert alert-${type}`} role="alert">
                {children}
                {onDismiss && <span className={'ms-5'} onClick={makeFalse}>❌</span>}
            </div>
        )
    );
};

export default Alert;