import React, { useState } from 'react';
import './Star.css';

const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Rating({ clickedStar, setClickedStar, score, setScore }) {
	const handleStarClick = (index) => {
		let clickStates = [...clickedStar];
		for (let i = 0; i < 10; i++) {
			clickStates[i] = i <= index ? true : false;
		}
		setScore(clickStates.filter(Boolean).length);
		setClickedStar(clickStates);
	};

	return (
		<div className=' rate_box'>
			<p className='rate_msg'>별점을 선택해주세요.</p>
			<div className='input__rating'>
				<div className='Star_wrapper'>
					<div className='yellowStar_wrapper'>
						{ARRAY.map((el, idx) => {
							return (
								<img
									id={idx}
									key={idx}
									onClick={() => handleStarClick(el)}
									className={
										clickedStar[el]
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
						<p className='rate'>{score}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
