import InfoData from "../../data/infoData.json";
import InfoAccordion from "./InfoAccordion";

function Info() {
  return (
    <div>
      {InfoData.map((data) => (
        <InfoAccordion data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Info;