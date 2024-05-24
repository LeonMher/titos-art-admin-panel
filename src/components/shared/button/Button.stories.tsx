import {Button} from './Button'

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => <Button type='primary' size='large' onClick={() => console.log('click')}>asads</Button>
export const Secondary = () => <Button type='default' size='large' onClick={() => console.log('click')}>asads</Button>
export const Danger = () => <Button type='primary' danger size='large' onClick={() => console.log('click')}>asads</Button>