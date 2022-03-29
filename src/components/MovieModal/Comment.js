import { dbService } from 'fbase';
import React, { useState } from 'react';

export default function Comment({ commentObj, isOwner, titles, onChange }) {
	const [editing, setEditing] = useState(false);
	const [newComment, setNewComment] = useState(commentObj.comment);

	const onDeleteClick = async () => {
		//const ok = window.confirm('정말 삭제하시겠습니까?');
		if (1 == 1) {
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
					<h4>{commentObj.comment}</h4>
					<h4>{commentObj.creatorName}</h4>
					{isOwner && (
						<>
							<button onClick={onDeleteClick}>╳</button>
							{/* <button onClick={toggleEditing}>✎</button> */}
						</>
					)}
				</>
			)}
		</div>
	);
}
