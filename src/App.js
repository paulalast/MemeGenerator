import React from "react"
import "./style.css"
import Header from "./components/Header.js"
import Meme from "./components/Meme"

function App() {
	return (
		<div className='site'>
			<Header />
			<Meme />
		</div>
	)
}

export default App
