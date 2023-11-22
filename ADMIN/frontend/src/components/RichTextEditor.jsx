import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = ({ value, onChange }) => {
  const [editorData, setEditorData] = useState('');

  useEffect(() => {
    setEditorData(value);
  }, [value]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    onChange(data);
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={handleEditorChange}
    />
  );
};

export default RichTextEditor;
