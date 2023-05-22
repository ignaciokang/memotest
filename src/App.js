import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import jugadores from './jugadoresData';
import background1 from './img/fondo1.png';
import background2 from './img/fondo2.png';
import { Footer } from './components/Footer';

// import './components/fonts/adicup-q-2022-tft';

const App = () => {
	const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([{}]);
	const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
	const [animating, setAnimating] = useState(false);

	useEffect(() => {
		const shuffledJugadoresList = shuffleArray([...jugadores, ...jugadores]);
		setShuffledMemoBlocks(
			shuffledJugadoresList.map((jugadores, i) => ({
				index: i,
				jugadores,
				flipped: false,
			}))
		);
	}, []);

	const shuffleArray = (a) => {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	};

	const handleMemoClick = (memoBlock) => {
		const flippedMemoBlock = { ...memoBlock, flipped: true };
		let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
		shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
		setShuffledMemoBlocks(shuffledMemoBlocksCopy);
		if (selectedMemoBlock === null) {
			setselectedMemoBlock(memoBlock);
		} else if (
			selectedMemoBlock.jugadores.numero === memoBlock.jugadores.numero
		) {
			setselectedMemoBlock(null);
		} else {
			setAnimating(true);
			setTimeout(() => {
				shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
				shuffledMemoBlocksCopy.splice(
					selectedMemoBlock.index,
					1,
					selectedMemoBlock
				);
				setShuffledMemoBlocks(shuffledMemoBlocksCopy);
				setselectedMemoBlock(null);
				setAnimating(false);
			}, 1000);
		}
	};

	const resetMemoBlocks = () => {
		const shuffledJugadoresList = shuffleArray([...jugadores, ...jugadores]);
		setShuffledMemoBlocks(
			shuffledJugadoresList.map((jugadores, i) => ({
				index: i,
				jugadores,
				flipped: false,
			}))
		);
	};

	return (
		<div className="principal">
			<h1>Memotest Scaloneta</h1>
			<div className="central">
				<div>
					<img src={background1} alt="Messi Background" />
				</div>
				<Board
					memoBlocks={shuffledMemoBlocks}
					animating={animating}
					handleMemoClick={handleMemoClick}
				/>
				<div>
					<img src={background2} alt="Scaloni Background" />
				</div>{' '}
			</div>
			<button onClick={resetMemoBlocks}>Reiniciar</button>
			<Footer />
		</div>
	);
};

export default App;
