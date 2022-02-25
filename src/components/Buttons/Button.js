export const Button=(props)=>{
    return(
<button className="btn btn-outline-success mx-1 fw-bold button1" type="submit" style={{backgroundColor: props.color,color : props.textColor ,height:'40px',marginTop:'18px',transition:'0.5s',}}>{props.buttonname}</button>
    )}