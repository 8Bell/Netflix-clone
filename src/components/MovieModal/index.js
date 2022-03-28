import { dbService } from 'fbase';
import { useEffect, useState } from 'react';
import './MovieModal.css';

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
	useEffect(() => {
		console.log();
		dbService.collection(title || name || original_name).onSnapshot((snapshot) => {
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
		await dbService.collection(title || name || original_name).add({
			movidId: title || name || original_name,
			creatorId: userObj.uid,
			creatorName: userObj.displayname || userObj.email,
			comment: comment,
			createdAt: Date.now(),
		});
		setComment('');
	};

	return (
		<div className='presentation' role='presentation'>
			<div className='wrapper-modal'>
				{/* <div 
            className='modalBackground' 
            style={{ position: 'absolute', width: '100%', height:'100%'}}
            onClick={()=> setModalOpen(false)}
            /> // 커스텀 훅스 아닌 js내 코드*/}
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
								{Math.round(Math.random() * 50 + 50)}% for you
							</span>{' '}
							{release_date ? release_date : first_air_date}
						</p>
						<h2 className='modal__title'>{title ? title : name}</h2>
						<p className='modal__overview'>평점: {vote_average}</p>
						<p className='modal__overview'>{overview}</p>
						<div>
							{comments.map((comment) => (
								<div key={comment.id}>
									<h4>{comment.comment}</h4>
									<h4>{comment.creatorName}</h4>
								</div>
							))}
						</div>
						{isLogIn && (
							<div>
								<form onSubmit={onSubmit}>
									<input
										type='text'
										placeholder='감상평을 남겨주세요.'
										maxLength={40}
										value={comment}
										onChange={onChange}></input>

									<input type='submit' value='남기기'></input>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieModal;
