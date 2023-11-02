import story2_1 from '../../images/story2-1.jpg';

export default function Introduction() {
    return (

        <div id="site-content" className="site-content" style={{ backgroundColor: '#fff', margin: 0, padding: 0 }}>
            <div className="container">
                <div className="row">
                    <div style={{ height: '100px' }} aria-hidden={true} className="wp-block-spacer"></div>

                    <div className="introParent wp-block-media-text alignfull is-stacked-on-mobile is-vertically-aligned-center" style={{ gridTemplateColumns: '38% auto' }}>
                        <figure className="wp-block-media-text__media" style={{ padding: '50px 0px 0px 0px' }}>
                            <img
                                decoding="async"
                                width="1080"
                                height="1566"
                                src={story2_1}
                                alt="Pool"
                                className="wp-image-77 size-full"
                            />
                        </figure>
                        <div className="wp-block-media-text__content">
                            <h1 className="wp-block-heading has-text-align-left has-text-color" style={{ color: '#212529' }}>
                                <strong>Welcome To J&G Homes Transient</strong>
                            </h1>

                            <p>
                                <strong>Lorem Ipsum has been the industry's standard dummy text ever since. It was popularized in the with the release.</strong>
                            </p>

                            <p></p>

                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                <br />
                                It was popularized in the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}