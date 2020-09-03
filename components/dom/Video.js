import React, { Component, Fragment } from 'react';

export default class Video extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { snippet } = this.props.video;
    const { description, thumbnails, title, publishedAt } = snippet;
    const url = `https://youtu.be/${snippet.resourceId.videoId}`;
    const thumb = thumbnails.high; // default, medium, high, standard, maxres
    const styles = {
      bgImg: {
        backgroundImage: `url(${thumb.url})`,
      },
    };
    return (
      <Fragment>
        <a href={url} className='video-wrapper' style={styles.bgImg}>
          <i className='fas fa-play' />
        </a>
      </Fragment>
    );
  }
}
