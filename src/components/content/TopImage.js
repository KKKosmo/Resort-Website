import outsideImage from '../../images/outside.jpg';

export default function TopImage() {
    return (
        <div className='image-container'>
            <img className="topImage slide_image d-block" src={outsideImage} alt="Outside" />
            <div className="topImageFilter">
            </div>
        </div>
    );
}
