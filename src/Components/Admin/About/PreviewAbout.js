import React, { Component } from "react";
import { Container, Button, LinkButton, Textarea, Modal } from "../../Common";
import { AboutContent } from "../../Public";
const PreviewAbout = ({ about }) => {
  return (
    <Modal buttonText="Preview" title="Preview About" appElement="#root">
      <AboutContent about={about} />
    </Modal>
  );
};

export { PreviewAbout };
