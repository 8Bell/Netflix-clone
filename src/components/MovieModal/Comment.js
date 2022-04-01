import { dbService } from 'fbase';
import React, { useState } from 'react';
import Rated from './CommnetStar';
import './Comment.css';

export default function Comment({ commentObj, isOwner, titles, onChange }) {
	const [editing, setEditing] = useState(false);
	const [newComment, setNewComment] = useState(commentObj.comment);

	const onDeleteClick = async () => {
		const ok = window.confirm('정말 삭제하시겠습니까?');
		if (ok) {
			console.log(titles);
			console.log(`${titles}/${commentObj.id}`);
			await dbService.doc(`${titles}/${commentObj.id}`).delete();
		}
	};
	const toggleEditing = () => {
		setEditing((prev) => !prev);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			{editing ? (
				<>
					<form onSubmit={onSubmit}>
						<input
							type='text'
							placeholder={commentObj.comment}
							onChange={onChange}
							// value={newComment}
							required
						/>
					</form>
					<button onClick={toggleEditing}>╳</button>
				</>
			) : (
				<>
					<Rated rate={commentObj.rate} />
					<p className='comment__rateScore'>{commentObj.rateScore}</p>
					<p
						clsssName='comment__para'
						style={{ fontSize: '20px', margin: '15px 0' }}>
						{commentObj.comment}
					</p>
					<p className='comment__userName'>
						{commentObj.creatorName}&nbsp;&nbsp;|&nbsp;&nbsp;
					</p>

					<p className='comment__date'> {commentObj.date} &nbsp;&nbsp;</p>

					{isOwner && (
						<>
							<button
								className='comment__deleteBtn'
								onClick={onDeleteClick}>
								╳
							</button>
							{/* <button onClick={toggleEditing}>✎</button> */}
						</>
					)}
				</>
			)}
		</div>
	);
}
