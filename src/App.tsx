import { useState } from 'react'

import generate from './lib/generate'

import './App.css'

function App() {
	const [name, setName] = useState("")
	const [disabled, setDislabled] = useState(false)

	const handleGenerate = async (): Promise<void> => {
		setDislabled(true)
		const newName = await generate();
		setName(newName)
		setDislabled(false)
	}

	return (
		<>
			<p className="generated-name">{name}</p>
			<button onClick={handleGenerate} disabled={disabled}>Generate</button>
		</>
	)
}

export default App
