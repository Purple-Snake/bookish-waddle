import BackPackIntro from "./BackPack_intro";
import BackPack_items from "./BackPack_items";
import "./backPackStyle.css";

function BackPack() {
    return ( 
        <div>
            <BackPackIntro />
            <BackPack_items />
        </div>
     );
}

export default BackPack;