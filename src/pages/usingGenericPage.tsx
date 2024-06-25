import '../styles/home/homepage.css';
import { GenericPage } from '../components/generics';

const UsingGenericPage = () => {

  return (
    <GenericPage selected='usingGenericPage'>
			<div className='homepage-main'>
				<h1 className=' text-3xl'>
					Using Generic Page
				</h1>
				<h2>
					this uses a GenericPage (unpadded) component
				</h2>
				<p>
					GenericPage is a generic page component with no padding by default,
					but its probably a good idea to add some padding to the sides of the page
				</p>
				<a href='/' className='link-invis'>
					<button className='button-primary button-medium'>
						Back to Homepage
					</button>
				</a>
			</div>
		</GenericPage>
  );
};

export default UsingGenericPage;