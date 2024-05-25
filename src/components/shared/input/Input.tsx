import { Input as AntInput } from "antd"

type InputProps = {
    type?: string
    name?: string
    id?: string
    placeholder? : string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    value?: string
}

export const Input = ({type='text', ...props}: InputProps) =>{
    return (
        <AntInput type={type} {...props}/>
    )
}