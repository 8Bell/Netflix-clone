import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Rating() {
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
		<Wrap>
			<Star style={{ display: 'inline' }}>
				{ARRAY.map((el, idx) => {
					return (
						<FaStar
							key={idx}
							size='50'
							onClick={() => handleStarClick(el)}
							className={clicked[el] && 'yellowStar'}
							style={{ transform: 'scaleX(-1)' }}
						/>
					);
				})}
			</Star>

			{/* <BackStars>
				{ARRAY.map((el, idx) => {
					return (
						<FaStarHalf
							key={idx}
							size='50'
							onClick={() => handleStarClick(el)}
							className={clicked[el] && 'yellowStar'}
							style={{ transform: 'scaleX(-1)' }}
						/>
					);
				})}
			</BackStars> */}
		</Wrap>
	);
}

export default Rating;

const Wrap = styled.div`
	position: absolute;
	width: 100%;
	height: 100px;
	background-color: green;
	flex-direction: column;
	display: inlign;
`;

const Star = styled.div`
	position: absolute;
	display: flex;
	margin-right: 25px;
	overflow: hidden;

	& svg {
		color: gray;
		cursor: pointer;
	}

	:hover svg {
		color: #fcc419;
	}

	& svg:hover ~ svg {
		color: gray;
	}

	.yellowStar {
		color: #fcc419;
	}
`;

// const BackStars = styled.div`
// 	position: absolute;
// 	background-color: rgba(0, 0, 0, 0.1);
// 	display: flex;
// 	padding-top: 5px;

// 	& svg {
// 		color: gray;
// 		cursor: pointer;
// 	}

// 	:hover svg {
// 		color: transparent;
// 	}

// 	& svg:hover ~ svg {
// 		color: gray;
// 	}

// 	.yellowStar {
// 		color: #fcc419;
// 	}
// `;
