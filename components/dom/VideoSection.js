import React, { Component, Fragment } from 'react';
import Video from './Video';

export default class VideoSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <section id='section-video'>
          <h1>Watch us stream new variants</h1>
          <div className='videos-grid'>
            {this.props.videos.map((video, i) => (
              <Video key={i} video={video} />
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}
