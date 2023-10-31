import TopImage from './content/TopImage';
import Introduction from './content/Introduction';
import Rooms from './content/Rooms';
import Features from './content/Features';
import Testimonials from './content/Testimonials';

function Content() {
    return (
        <div className='wrapper'>
            <TopImage />
            <Introduction />
            <Features />
            <Rooms />
            <Testimonials />
        </div>
    )
}
export default Content;