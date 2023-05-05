import Card from "../Card/Card";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu" style={{ display: "flex", justifyContent: "center" }}>
      <Card
        caption="התחל"
        image={
          "https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/19/full/1671410852-4743.jpg"
        }
      />
      <div className="footer">Roei Bachar's Project &copy;</div>
    </div>
  );
}

export default Menu;
