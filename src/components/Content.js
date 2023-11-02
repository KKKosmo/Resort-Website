import TopImage from './content/TopImage';
import Introduction from './content/Introduction';
import Rooms from './content/Rooms';
import Features from './content/Features';
import Testimonials from './content/Testimonials';
import Staff from './content/Staff';
import People from './content/People';
import Map from './content/Map';

function Content() {
    return (
        <div className='wrapper'>
            <TopImage />
            {/* <Introduction /> */}
            <Features />
            <Rooms />
            <Staff />
            <Testimonials />
            <People />
            <Map />
        </div>
    )
}
export default Content;