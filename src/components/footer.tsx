import "../styles/footer/footer.css";

const Footer = () => {

  return (
		<div className='footer-container'>
			<div className="footer-body">
				<div className='footer-copyright'>
					Made with&nbsp;<span className="text-red-500">&#10084;</span>&nbsp;by&nbsp;<a className='link' href='https://github.com/crystaltine' target='_blank' rel="noopener noreferrer">crystaltine</a>
				</div>
			</div>
		</div>
  );
};

export default Footer;