import React from "react";
import { Modal } from "../../Common";
import { AboutContent } from "../../Public";

const PreviewAbout = ({ about }) => {
  return (
    <Modal title="Preview About" appElement="#root" className="fa fa-eye fa-3x preview-button margin">
      <AboutContent about={about} />
    </Modal>
  );
};

export { PreviewAbout };
