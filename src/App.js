
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism.css";
import "./App.css"

const CodeEditor = () => {
	const [code, setCode] = useState(`
  import React from 'react';
    import ReactDOM from 'react-dom';

    function App() {
       return (
         <h1>Hello World</h1>
      );
    }

  ReactDOM.render(<App />, document.getElementById('root'));
`);
	const [highlightedCode, setHighlightedCode] = useState("");

	useEffect(() => {
		const highlighted = Prism.highlight(code, Prism.languages.jsx, "jsx");
		setHighlightedCode(highlighted);
	}, [code]);

	const handleChange = (e) => {
		setCode(e.target.value);
	};

	return (
		<div className="container">
			<h1>React Simple Code Editor</h1>
			<div className="code-editor-container">
				<textarea
					value={code}
					onChange={handleChange}
					className="code-input"
					spellCheck="false"
				/>
				<div className="code-output">
					<pre>
						<code
							className="language-jsx"
							dangerouslySetInnerHTML={{ __html: highlightedCode }}
						/>
					</pre>
				</div>
			</div>
			<a
				href="https://github.com/soham4021/React_Code_Editor_Prism"
				target="_blank"
				rel="noopener noreferrer"
				className="github-button">
				GitHub Repo
			</a>
		</div>
	);
};

export default CodeEditor;
