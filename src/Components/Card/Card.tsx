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
        style={{
          borderRadius: "50%",
          height: "50%",
          width: "100%",
          backgroundSize:"100% 100%",
          backgroundRepeat:"no-repeat",
          objectFit: "cover",
          backgroundImage: `url(${props.image})`,
          opacity: "75%",
          boxShadow: "inset 3px 2px 1px black",
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
