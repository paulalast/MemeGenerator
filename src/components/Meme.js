import React, { useEffect, useState } from "react"

function Meme() {
	const [meme, setMeme] = useState({
		topText: "hejo",
		bottomText: "ho",
		randomImage: "https://i.imgflip.com/1bhk.jpg",
	})
	const [allMemes, setAllMemes] = useState([])
	useEffect(() => {
		async function getMemes() {
			const res = await fetch("https://api.imgflip.com/get_memes")
			const data = await res.json()
			setAllMemes(data.data.memes)
		}
		getMemes()
	}, [])

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[randomNumber].url

		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url,
		}))
	}
	function handleChange(event) {
		const { name, value } = event.target
		setMeme(prevMeme => {
			return {
				...prevMeme,
				[name]: value,
			}
		})
	}
	return (
		<main>
			<div className='form'>
				<input
					type='text'
					placeholder='Top text'
					name='topText'
					value={meme.topText}
					className='form--input'
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Bottom Text'
					name='bottomText'
					value={meme.bottomText}
					className='form--input'
					onChange={handleChange}
				/>

				<button onClick={getMemeImage} className='form--button'>
					Get a new meme image 🖼
				</button>
			</div>
			<div className='meme'>
				<img alt='meme' src={meme.randomImage} className='meme--image' />
				<h2 className='meme--text top'>{meme.topText}</h2>
				<h2 className='meme--text bottom'>{meme.bottomText}</h2>
			</div>
		</main>
	)
}
export default Meme
