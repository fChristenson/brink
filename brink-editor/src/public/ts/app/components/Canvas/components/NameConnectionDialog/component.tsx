import * as React from "react";
import { Dialog, Tag, InputGroup, Button } from "@blueprintjs/core";
import { IConnection } from "../RootNode/Connection";
import { config } from "./config";

interface IProps {
  tags: string[];
  connectionToName?: IConnection;
  defaultName: string;
  onCancel(): void;
  onSubmit(
    event: React.FormEvent<HTMLFormElement>,
    connectionToName?: IConnection
  ): void;
}

export const NameConnectionDialog: React.FunctionComponent<IProps> = ({
  onSubmit,
  onCancel,
  defaultName,
  tags,
  connectionToName
}) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    setName(defaultName);
  }, [defaultName]);

  return (
    <Dialog
      onClose={onCancel}
      isOpen={!!connectionToName}
      icon="label"
      title="Name transition"
      className="bp3-dark"
    >
      <form
        onSubmit={e => {
          setName("");
          onSubmit(e, connectionToName);
        }}
      >
        <InputGroup
          name="name"
          max={config.max}
          maxLength={config.max}
          min={config.min}
          minLength={config.min}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
          type="text"
          rightElement={
            <Button
              className="name_connection_dialog__submit"
              disabled={!name || name.length < 1}
              type="submit"
              icon="confirm"
            />
          }
          placeholder="Connection name"
          autoFocus
        />
      </form>
      <h3 className="name_connection_dialog__h2">Recently used names</h3>
      <ul className="name_connection_dialog__tags">
        {tags.length < 1 && <p>No tags found</p>}
        {tags.map((t, i) => (
          <li key={i} className="name_connection_dialog__tag">
            <Tag interactive minimal onClick={() => setName(t)}>
              {t}
            </Tag>
          </li>
        ))}
      </ul>
    </Dialog>
  );
};
