import './MemoBlock.css';

const MemoBlock = ({ animating, handleMemoClick, memoBlock }) => {
	console.log(memoBlock);

	return (
		<div
			className="memo-block"
			onClick={() =>
				!memoBlock.flipped && !animating && handleMemoClick(memoBlock)
			}
		>
			<div
				className={`memo-block-inner ${
					memoBlock.flipped && 'memo-block-flipped'
				}`}
			>
				<div className="memo-block-front"></div>
				<div className="memo-block-back">
					<img
						src={memoBlock?.jugadores?.imagen}
						alt={memoBlock?.jugadores?.nombre}
					/>
					<p>{memoBlock?.jugadores?.apodo}</p>
				</div>
			</div>
		</div>
	);
};

export default MemoBlock;
