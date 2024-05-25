import { Input as AntInput } from "antd"

type InputProps = {
    type?: string
}

export const Input = ({type='text', ...props}: InputProps) =>{
    return (
        <AntInput type={type} {...props}/>
    )
}