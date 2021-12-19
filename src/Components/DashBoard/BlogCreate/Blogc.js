import React from "react";
import RichEditor from "../components/editor/RichEditor";
import Button from "../components/Button";
import useSubmit from "../hooks/useSubmit";
import useRichEditor from "../hooks/useRichEditor";
const Blogc = () => {
  const {
    editorState,
    onNoteChange,
    clearEditor,
    mapKeyToEditorCommand,
    handleKeyCommand,
    toggleInlineStyle,
    toggleBlockType,
  } = useRichEditor();
  const { submitPage } = useSubmit();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = editorState.getCurrentContent();
    await submitPage(data);
  };
  return (
    <form handleSubmit={handleSubmit}>
      <RichEditor
        editorState={editorState}
        onNoteChange={onNoteChange}
        clearEditor={clearEditor}
        mapKeyToEditorCommand={mapKeyToEditorCommand}
        handleKeyCommand={handleKeyCommand}
        toggleInlineStyle={toggleInlineStyle}
        toggleBlockType={toggleBlockType}
      />
      <Button kind="primary" type="submit" label="add" />
    </form>
  );
};
export default Blogc;
