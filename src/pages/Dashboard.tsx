import useProject from '../api/useProject'
const Dashboard = () =>{

    const { data, isLoading } = useProject();
    console.log(data, ' data')
    return(
        <div style={{width: '100%', height: '100%'}}>
            {isLoading ? <p>Loading...</p> : data.map((item: any)=>{
                return <p>{item.name}</p>
            })}
           
        </div>
    )
}

export default Dashboard