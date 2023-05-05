import { useNavigate } from "react-router-dom";
import { CardProps } from "../../Interfaces/IQuestions";
import "./Card.css";

function Card(props: CardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
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
        <span>{props.caption}</span>
      </button>
      <div className="Card">
      </div>
    </>
  );
}

export default Card;
