
import withEditor from './withEditor'; // Adjust the import path as necessary

const EditorDiv = withEditor(({ style, children }) => <div style={style}>{children}</div>);

export default EditorDiv;
