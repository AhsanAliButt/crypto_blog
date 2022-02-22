export const Button=(props)=>{
    return(
<button className="btn btn-outline-success m-2 fw-bold" type="submit" style={{backgroundColor: props.color,color : props.textColor}}>{props.buttonname}</button>
    )}