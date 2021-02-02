import { useState } from 'react';
import { choice } from './helpers';
import './EightBall.css';

const EightBall = ({ answers }) => {
	const [ msg, setMsg ] = useState('Think of a Question');
	const [ color, setColor ] = useState('black');
	const [ redCount, setRedCount ] = useState(0);
	const [ greenCount, setGreenCount ] = useState(0);
	const [ goldCount, setGoldCount ] = useState(0);

	function getMsg() {
		if (color === 'black') {
			const pick = choice(answers);
			setColor(pick.color);
			setMsg(pick.msg);
			if (pick.color === 'red') setRedCount(redCount + 1);
			if (pick.color === 'green') setGreenCount(greenCount + 1);
			if (pick.color === 'goldenrod') setGoldCount(goldCount + 1);
		} else {
			setColor('black');
			setMsg('Think of a Question');
		}
	}

	return (
		<div className="EightBall">
			<div onClick={getMsg} style={{ backgroundColor: color }} className="EightBall-ball">
				<p className="EightBall-msg">{msg}</p>
			</div>
			<p>
				<b>Red:</b> {redCount}
				<b> Green:</b> {greenCount}
				<b> Goldenrod:</b> {goldCount}
			</p>
		</div>
	);
};

export default EightBall;
