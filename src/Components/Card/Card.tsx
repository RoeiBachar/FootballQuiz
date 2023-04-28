import { useNavigate } from "react-router-dom";
import { CardProps } from "../../Interfaces/IQuestions";
import NewMain from "../NewMain/NewMain";
import "./Card.css";

function Card(props: CardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="Card">
      <button
        className="myCard"
        onClick={() => {
          navigate("/NewMain");
        }}
        id="cardButton"
        style={{
         
          backgroundImage: `url(${props.image})`,
         
        }}
      >
        <span
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "20%",
            padding: "8px",
            fontSize: "6vh",
          }}
        >
          {props.caption}
        </span>
      </button>
    </div>
  );
}

export default Card;
