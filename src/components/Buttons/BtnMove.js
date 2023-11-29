import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// 이동 버튼 구현
function BtnMove(props) {
  return (
    <Link to={props.to}>
      <Button
        variant="outline-info"
        size="lg"
        className="d-inline-flex align-items-baseline"
        style={{ margin: "1rem" }}
      >
        <p style={{ fontSize: "2rem", margin: 0 }}>{props.str}</p>
        <i
          className="fa-solid fa-arrow-right ms-2"
          style={{ color: "darkgray" }}
        ></i>
      </Button>
    </Link>
  );
}

export default BtnMove;
