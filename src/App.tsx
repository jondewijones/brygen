import { useState } from 'react'

import './App.css'

function App() {
	const [name, setName] = useState("")

	const handleGenerate = (): void => {
		// call generate
		// update state
	}

	return (
		<>
			<h1>Brygen app!!</h1>
			<p>{name}</p>
			<button onClick={handleGenerate}>Generate</button>
		</>
	)
}

export default App
