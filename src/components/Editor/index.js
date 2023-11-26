import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Example = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	return (
		<JoditEditor
			ref={editor}
			value={content}
			onChange={newContent => {}}
		/>
	);
};

export default Example;