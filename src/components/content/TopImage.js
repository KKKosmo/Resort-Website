import outsideImage from '../../images/outside.jpg';

export default function TopImage() {
    return (
        <div>
            <img className="topImage slide_image d-block" src={outsideImage} alt="Outside" />
        </div>
    );
}
