import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import arrowDownIcon from "../../assets/images/svg/arrow-down-solid.svg"

function InfoAccordion({ data }) {
  const eventKey = data.id == 1 ? "1" : "0";

  return (
    <Accordion className="accordion" defaultActiveKey="1">
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className="accordion-head">{data.header}</Accordion.Header>
        <Accordion.Body>
          {data.body}
          <Link to="/kuprine">{data.link}</Link>
          {eventKey == true && (
            <div className="arrow-container">
              <img className="arrow-icon" src={arrowDownIcon} alt="&#8595;" />
            </div>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

InfoAccordion.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InfoAccordion;
