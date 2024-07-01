import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "./CodeEditor.css";

const CodeEditor = () => {
	const [code, setCode] = useState(`
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a sample React code.</p>
    </div>
  );
}

export default App;
`);
	const codeRef = useRef(null);
	const textareaRef = useRef(null);

	useEffect(() => {
		if (codeRef.current) {
			const highlightedCode = Prism.highlight(
				code,
				Prism.languages.javascript,
				"javascript"
			);
			codeRef.current.innerHTML = highlightedCode;
		}
	}, [code]);

	const handleCodeChange = (e) => {
		setCode(e.target.value);
	};

	const handleEditorClick = () => {
		textareaRef.current.focus();
	};

	return (
		<div className="code-editor-container" onClick={handleEditorClick}>
			<pre className="code-editor-highlight" ref={codeRef}></pre>
			<textarea
				className="code-editor-textarea"
				ref={textareaRef}
				value={code}
				onChange={handleCodeChange}
			/>
		</div>
	);
};

export default CodeEditor;
