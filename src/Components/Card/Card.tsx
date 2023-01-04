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
          navigate(`/${props.topic}`);
        }}
        style={{
          borderRadius: "50%",
          height: "450px",
          width: "480px",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundImage: `url(${props.image})`,
          opacity: "75%",
          boxShadow: "inset 3px 2px 1px black"
        }}
      >
        <span style={{ backgroundColor: "black", color: "white",borderRadius: "20%",padding:"8px",fontSize:"55px"}}>
          {props.topic == 1 ? "חובבן" : props.topic == 2 ? "מתקדם" : "מקצוען"}
        </span>
      </button>
    </div>
  );
}

export default Card;
