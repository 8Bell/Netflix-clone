import React from 'react';
import './RowBlur.css';

export default function RowBlur() {
	return (
		<div className='row__blur'>
			<div className='row__blur-text'>
				<p className='row__blur-t'>시청할 콘텐츠는 무궁무진합니다.</p>
				<p className='row__blur-p'>
					넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스
					오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는
					시간에 원하는 만큼 시청하세요.
				</p>
				<button className='row__blur-btn'>지금가입하기</button>
			</div>
		</div>
	);
}
