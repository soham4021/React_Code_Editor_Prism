import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism.css";
import "./App.css";

const App = () => {
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

	const highlight = (code) => {
		return Prism.highlight(code, Prism.languages.jsx, "jsx");
	};

	return (
		<div className="container">
			<h1>React Simple Code Editor</h1>
			<Editor
				value={code}
				onValueChange={setCode}
				highlight={highlight}
				padding={10}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 14,
				}}
			/>
			<a
				href="https://github.com/soham4021/React_Code_Editor_Prism"
				target="_blank"
				rel="noopener noreferrer"
				className="github-button">
				GitHub
			</a>
		</div>
	);
};

export default App;
