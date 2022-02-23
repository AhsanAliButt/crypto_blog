export const Button=(props)=>{
    return(
<button className="btn btn-outline-success mx-2 fw-bold" type="submit" style={{backgroundColor: props.color,color : props.textColor ,height:'40px',marginTop:'38px',transition:'0.5s',}}>{props.buttonname}</button>
    )}