import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function Wizard_card({ data }) {
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: "18rem", flex: "1" }}>
        <Card.Body>
          <Card.Text><img src={data.body} alt="" /></Card.Text>
        </Card.Body>
      </Card>
      <iframe
        style={{width: "50%", height: "30rem"}}
        src={data.embVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

Wizard_card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Wizard_card;
