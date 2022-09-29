import React from 'react';
import me from '../../assets/founder.jpg';
import { motion } from 'framer-motion';
const Founder = () => {
	const options = {
		initial: {
			x: '-100%',
		},
		whileInView: {
			x: '0',
		},
	};

	return (
		<div>
			<section className='founder'>
				<motion.div {...options}>
					<img className='img' src={me} alt='Founder' />

					<h3>Praharsh Tembhurne</h3>
					<p>
						Hey, EveryOne I am Praharsh Tembhurne, the founder of
						MBA Burger Wala.
					</p>
				</motion.div>
			</section>
		</div>
	);
};

export default Founder;
