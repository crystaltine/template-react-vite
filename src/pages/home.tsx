import '../styles/home/homepage.css';
import { GenericPagePadded } from '../components/generics';

const Homepage = () => {

  return (
    <GenericPagePadded selected='Homepage'>
			<div className='homepage-main'>
				<h1>
					Homepage
				</h1>
				<h2>
					this is using a GenericPagePadded component
				</h2>
				<p>
					GenericPagePadded automatically adds some aesthetic padding to the sides of the page
				</p>
				<a href='/usingGenericPage' className='link-invis'>
					<button className='button-primary button-medium mr-5'>
						use generic page (no padding) instead
					</button>
				</a>
				<button className='button-secondary button-medium'>
					secondary button that does nothing
				</button>
			</div>
		</GenericPagePadded>
  );
};

export default Homepage;