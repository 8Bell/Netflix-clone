import React, { useState, useEffect } from 'react';
import './Star.css';

const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let score = 0;
export default function Rating() {
	const [clicked, setClicked] = useState([
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
	]);

	const handleStarClick = (index) => {
		let clickStates = [...clicked];
		for (let i = 0; i < 10; i++) {
			clickStates[i] = i <= index ? true : false;
		}
		score = clickStates.filter(Boolean).length;
		setClicked(clickStates);
	};

	return (
		<div
			className=' rate_box
    '>
			<p>별점을 선택해주세요.</p>
			<div className='input__rating'>
				<div className='Star_wrapper'>
					{/* <div className='backStar_wrapper'>
						<img className='backStar' src='/images/yellowStar.png' />
						<img className='backStar' src='/images/yellowStar.png' />
						<img className='backStar' src='/images/yellowStar.png' />
						<img className='backStar' src='/images/yellowStar.png' />
						<img className='backStar' src='/images/yellowStar.png' />
					</div> */}
					<div className='yellowStar_wrapper'>
						{ARRAY.map((el, idx) => {
							return (
								<img
									id={idx}
									key={idx}
									onClick={() => handleStarClick(el)}
									className={
										clicked[el]
											? idx % 2 === 0
												? 'yellowStar'
												: 'yellowStar--reverse'
											: idx % 2 === 0
											? 'grayStar'
											: 'grayStar--reverse'
									}
									src='/images/yellowStarHalf.png'
								/>
							);
						})}
					</div>
				</div>
			</div>
			<p className='rate'>{score / 2}</p>
		</div>
	);
}
