import { Button } from "../Buttons/Button.js";
export const InputForm = () =>{
    return(
        <form className="d-flex bc">
        <input className="form-control s1" type="search" placeholder="Search" aria-label="Search" />
        <Button buttonname="Search" color="gray" textColor="white" />
    </form>
    )
}