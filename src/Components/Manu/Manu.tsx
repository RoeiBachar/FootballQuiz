import Card from "../Card/Card";
import "./Manu.css";

function Manu(): JSX.Element {
  return (
    <div className="Manu">
      <Card
        image={
          "https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/19/full/1671410852-4743.jpg"
        }
      />
      <div className="footer">Roei Bachar's Project &copy;</div>
    </div>
  );
}

export default Manu;
