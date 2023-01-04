import Card from "../Card/Card";
import "./Manu.css";

function Manu(): JSX.Element {
  return (
    <div className="Manu animated-background">
      <Card
        topic={"1"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_w-YXwFgfcnhz1hh1D7jbrrrLymzK3JyEg&usqp=CAU"
        }
      />
      <Card
        topic={"2"}
        image={
          "https://media.gq-magazine.co.uk/photos/611e8ca6ca361ca29931f30e/master/pass/19082021_TED_HP.jpg"
        }
      />
      <Card
        topic={"3"}
        image={
          "https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/19/full/1671410852-4743.jpg"
        }
      />
    </div>
  );
}

export default Manu;
