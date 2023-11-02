export default function Map() {
    return (
        <div className="site-content">
            <div className="container">
                <div style={{ height: '100px' }} aria-hidden={true} className="wp-block-spacer"></div>
                <div className="map">
                    <div className="map-content">
                        <h1 className="wp-block-heading has-text-align-left has-text-color" style={{ color: '#212529' }}>
                            <strong>Where you'll be</strong>
                        </h1>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15287.894504534606!2d120.3272570451938!3d16.678203170249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33918ded10f4b7e5%3A0x99bc42361d3a56fa!2sJ%20%26%20G%20Homes!5e0!3m2!1sen!2sph!4v1698932094768!5m2!1sen!2sph"
                            width="900"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p>
                            <strong>286, pegion street, montemar village, San Juan, 2514 La Union</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ height: '20px' }} aria-hidden={true} className="wp-block-spacer"></div>
        </div>
    );
}