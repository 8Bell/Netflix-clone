import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Rating() {
	const [clicked, setClicked] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const handleStarClick = (index) => {
		let clickStates = [...clicked];
		for (let i = 0; i < 10; i++) {
			clickStates[i] = i <= index ? true : false;
		}
		setClicked(clickStates);
	};

	useEffect(() => {
		sendReview();
	}, [clicked]);

	const sendReview = () => {
		let score = clicked.filter(Boolean).length;
	};

	return (
		<div>
			<h1 className='rate'>{clicked}</h1>
			<div className='input__rating'>
				<div className='backStar_wrapper'>
					<img className='backStar' src='/images/grayStar.png' />
					<img className='backStar' src='/images/grayStar.png' />
					<img className='backStar' src='/images/grayStar.png' />
					<img className='backStar' src='/images/grayStar.png' />
					<img className='backStar' src='/images/grayStar.png' />
				</div>
				<div className='yellowStar_wrapper'>
					{ARRAY.map((el, idx) => {
						return (
							<img
								key={idx}
								onClick={() => handleStarClick(el)}
								className={
									clicked[el]
										? idx % 2 === 0
											? 'yellowStar'
											: 'yellowStar--reverse'
										: 'grayStar'
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
