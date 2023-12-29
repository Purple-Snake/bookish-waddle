import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
// import ExampleModal from "../modal/ExampleModal";

function BackPack_item({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <h3>{data.title}</h3>
        {data.content.map((contentData) => (
          <div key={contentData.header}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{contentData.header}</Accordion.Header>
                <Accordion.Body>
                  {contentData.body}
                  {contentData.body2 && (
                    <span>
                      <Button variant="primary" onClick={handleShow}>
                        Žemėlapis
                      </Button>
                      <div>{contentData.body2}</div>
                    </span>
                  )}
                  {contentData.links && contentData.links.length > 0 && (
                    <span>
                      {contentData.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Nuoroda {linkIndex + 1}
                        </a>
                      ))}
                    </span>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Žemėlapio pavyzdys</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src="../slides/Zemelapis.png" alt="Temu zemelapis"></img></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Uždaryti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

BackPack_item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BackPack_item;
