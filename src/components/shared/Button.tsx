import { Button as AntButton } from "antd";


type ButtonProps = {
    type: 'link' | 'primary' | 'text' | 'default' | 'dashed' | undefined
    size: 'large' | 'middle' | 'small'
    disabled?: boolean
    icon?: React.ReactNode
    onClick: () => void
    children: React.ReactNode
}

export const Button = ({ type='primary', size='middle', disabled, icon, children, ...props}: ButtonProps) =>{
    return(
        <AntButton type={type} disabled={disabled} size={size} icon={icon} {...props}>{children}</AntButton>
    )
}

