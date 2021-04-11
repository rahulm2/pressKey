import React, { PureComponent } from 'react';

class Footer extends PureComponent {
	render() {
		return (
			<footer className="footer">
				<div className='footer__content'>
					Developed By -{' '}
					<a rel="noopener noreferrer" href="https://www.linkedin.com/in/rahulmehra12/" target="_blank">
						<span className="creditsName">Mohit Kulkarni</span>
					</a>{' '}
					{' & '}
					<a rel="noopener noreferrer" href="https://www.linkedin.com/in/rahulmehra12" target="_blank">
						<span className="creditsName">Rahul Mehra</span>
					</a>
				</div>
			</footer>
		);
	}
}

export default Footer;