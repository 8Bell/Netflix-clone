import React, { useState } from 'react';
import './CommentStar.css';

const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let score = 0;

export default function Rated({ rate }) {
	const [clickedStar, setclickedStar] = useState(rate);

	return (
		<div className='comment__input__rating'>
			<div className='comment__Star_wrapper'>
				<div className='comment__yellowStar_wrapper'>
					{ARRAY.map((el, idx) => {
						return (
							<img
								id={idx}
								key={idx}
								className={
									clickedStar[el]
										? idx % 2 === 0
											? 'comment__yellowStar'
											: 'comment__yellowStar--reverse'
										: idx % 2 === 0
										? 'comment__grayStar'
										: 'comment__grayStar--reverse'
								}
								src='/images/yellowStarHalf.png'
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
