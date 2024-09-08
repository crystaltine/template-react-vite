import React from 'react';
import '../styles/home/homepage.css';
import { GenericPagePadded } from '../components/generics';
import { Popup } from '../components/popup';

const Homepage = () => {

	const [popupOpen, setPopupOpen] = React.useState(false);

  return (
    <GenericPagePadded selected='Homepage'>
			<div className='homepage-main'>
				<h1>
					(h1) Generic Homepage
				</h1>
				<h2>
					(h2) Using a GenericPagePadded component
				</h2>
				<p>
					(p) GenericPagePadded automatically adds some aesthetic padding to the sides of the page
				</p>
				<a href='/usingGenericPage' className='link-invis'>
					<button className='button-primary button-medium mr-5 mb-5'>
						use generic page (no padding) instead
					</button>
				</a>
				<button 
				className='button-secondary button-medium'
				onClick={() => setPopupOpen(prev => !prev)}>
					secondary button that opens a sample popup
				</button>
				<Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
					<h3 className='mopo'>
						(h3) Sample Popup
					</h3>
					<h5 className='mopo'>
						(h5) This is a sample popup, using the Popup component
					</h5>
					<p className='mopo'>
						Important note: popup body div automatically adds 20px padding between children.
						<br />
						in this example, all children have margin-0 padding-0 to prevent double padding
						<br />
						Also popups do not have a close button by default, click outside the popup to close
					</p>
				</Popup>
			</div>
		</GenericPagePadded>
  );
};

export default Homepage;