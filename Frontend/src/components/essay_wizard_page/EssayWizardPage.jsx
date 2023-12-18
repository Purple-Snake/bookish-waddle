import Wizard_intro from "./wizard_intro";
import Wizard_cards from "./Wizard_cards";
import Wizard_footer from "./Wizard_footer";
import "./essayWizardStyle.css";

function EssayWizardPage() {
    return ( 
        <div>
            <Wizard_intro />
            <Wizard_cards />
            <Wizard_footer />
        </div>
     );
}

export default EssayWizardPage;