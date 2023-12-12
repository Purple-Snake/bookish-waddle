import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function BackPack_item({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      {data.content.map((contentData) => (
        <div key={contentData.header}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{contentData.header}</Accordion.Header>
              <Accordion.Body>{contentData.body}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

BackPack_item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BackPack_item;
