import { dbService } from 'fbase';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import './MovieModal.css';
import Rating from './Star';

function MovieModal({
	backdrop_path,
	title,
	overview,
	name,
	original_name,
	release_date,
	first_air_date,
	vote_average,
	clickRef,
	setModalOpen,
	isLogIn,
	userObj,
}) {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);

	const titles = title || name || original_name;

	// const getComments = async () => {
	// 	const dbComments = await dbService.collection(name).get();
	// 	dbComments.forEach((document) => {
	// 		const commentObj = {
	// 			...document.data(),
	// 			id: document.id,
	// 		};
	// 		setComments((prev) => [commentObj, ...prev]);
	// 	});
	// };
	const [clickedStar, setClickedStar] = useState([
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

	const [score, setScore] = useState('');
	let today = new Date();

	useEffect(() => {
		dbService.collection(titles).onSnapshot((snapshot) => {
			const commentArr = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setComments(commentArr);
		});
	}, []);

	const onChange = (e) => {
		setComment(e.target.value);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		await dbService.collection(titles).add({
			movidId: titles,
			creatorId: userObj.uid,
			creatorName: userObj.displayname || userObj.email,
			comment: comment,
			createdAt: Date.now(),
			date:
				today.toLocaleDateString() +
				' ' +
				today.getHours() +
				':' +
				today.getMinutes(),
			rate: clickedStar,
			rateScore: clickedStar.filter(Boolean).length,
		});
		setComment('');
		setScore('');
		setClickedStar([false, false, false, false, false, false, false, false, false, false]);
	};

	return (
		<div className='presentation' role='presentation'>
			<div className='wrapper-modal'>
				<div className='modal' ref={clickRef}>
					<span onClick={() => setModalOpen(false)} className='modal-close'>
						{' '}
						╳{' '}
					</span>
					<img
						className='modal__poster-img'
						src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
						alt='modal__poster-img'
					/>
					<div className='modal__content'>
						<p className='modal__details'>
							<span className='modal__user-perc'>
								{Math.round(25 + vote_average * 0.75 * 10)} % for
								you &nbsp;
							</span>{' '}
							{release_date ? release_date : first_air_date}
						</p>
						<h2 className='modal__title'>{title ? title : name}</h2>
						<p className='modal__overview'>평점: {vote_average}</p>
						<p className='modal__overview'>{overview}</p>

						<div className='comments__wrapper'>
							{isLogIn && (
								<div
									className={`comments__forms ${
										score >= 1 && 'comment__forms_open'
									}`}>
									<form onSubmit={onSubmit}>
										<Rating
											clickedStar={clickedStar}
											setClickedStar={setClickedStar}
											score={score}
											setScore={setScore}
										/>
										{score >= 1 && (
											<div className='comments__form--hanlder'>
												<input
													className='comments__forms--input'
													type='text'
													placeholder=' 감상평을 남겨주세요.'
													maxLength={40}
													value={comment}
													required
													onChange={
														onChange
													}></input>

												<input
													className='comments__forms--submit'
													type='submit'
													value='남기기'></input>
											</div>
										)}
									</form>
								</div>
							)}
							<div className='comments__comments'>
								{comments.map((comment) => (
									<div className='comments__comment'>
										<Comment
											key={comment.id}
											commentObj={comment}
											isOwner={
												comment.creatorId ===
												userObj.uid
											}
											titles={titles}
											onChange={onchange}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieModal;
