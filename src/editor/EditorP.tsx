import withEditor from './withEditor'; // Adjust the import path as necessary

const EditorP = withEditor(({ style, children }) => <p style={style}>{children}</p>);

export default EditorP;