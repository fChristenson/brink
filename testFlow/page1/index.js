import React from "react";
import { PageBuilder } from "../../src/libs/pageBuilder";
import xml from "./test.xml.json";

const props = {
  onUpdateCallback: state => console.log("onUpdate", state),
  onSubmit: state => console.log("onSubmit", state),
  validators: {
    foo: value => value && value.length > 3 && "Value is ge 3"
  },
  onClicks: {
    goToFirstQuestion: e => {
      e.preventDefault();
      window.location.href = "/2";
    }
  }
};

export const Page1 = () => <PageBuilder xml={xml} props={props} />;
