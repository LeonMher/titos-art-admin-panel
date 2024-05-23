import useProject from '../api/useProject'
import MyButton from 'remoteApp/Button'

const Dashboard = () =>{

    const { data, isLoading } = useProject();
    console.log(data, ' data')
    return(
        <div style={{width: '100%', height: '100%'}}>
            {isLoading ? <div className='loader'></div> : data.map((item: any)=>{
                return <p>{item.name}</p>
            })}
           <MyButton />
        </div>
    )
}

export default Dashboard