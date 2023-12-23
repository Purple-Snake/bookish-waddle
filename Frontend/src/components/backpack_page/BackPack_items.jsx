import backpackData from "../../data/backpackData.json"
import BackPack_item from "./backPack_item";

function BackPack_items() {
    return ( 
        <div className="accordion-container">
            {backpackData.map(data => (
                <BackPack_item  data={data} key={data.id}/>
            ))}
        </div>
     );
}

export default BackPack_items;