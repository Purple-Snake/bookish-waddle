import essayWizardData from "../../data/essayWizardData.json";
import Wizard_card from "./Wizard_card";

function Wizard_cards() {
  return (
    <div>
      {essayWizardData.map((data) => (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <Wizard_card data={data} />
        </div>
      ))}
    </div>
  );
}

export default Wizard_cards;
