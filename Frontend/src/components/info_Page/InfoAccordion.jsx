import PropTypes from "prop-types"
import Accordion from "react-bootstrap/Accordion";

function InfoAccordion({ data }) {
    return ( 
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{data.header}</Accordion.Header>
          <Accordion.Body>
            {data.body}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     );
}

InfoAccordion.propTypes = {
    data: PropTypes.object.isRequired
}

export default InfoAccordion;