import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// 이동 버튼 구현
function BtnMove(props){
  return(
    <Link to={props.to}>
      <Button variant="dark" className="d-inline-flex align-items-baseline">
        <p>{props.str}</p>
        <i className="fa-solid fa-arrow-right ms-2" style={{color: "#c17c06"}}></i>
      </Button>
    </Link>
  )
};

export default BtnMove;