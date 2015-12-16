import React, { Component, PropTypes } from 'react';

export default class ProgressiveImage extends React.Component {
  static propTypes = {
    placeholderSrc: PropTypes.string.required,
    src: PropTypes.string.required,
    height: PropTypes.string,
    width: PropTypes.string
  };

  state = {
    hasImageLoaded: false
  };

  handleLoad() {
    this.setState({hasImageLoaded: true});
  }

  render() {
    const {placeholderSrc, src} = this.props;
    const width = this.props.width || 'auto';
    const height = this.props.height || 'auto';

    const fullImageStyle = {
      width,
      height,
      position: 'absolute',
      opacity: this.state.hasImageLoaded ? 1 : 0,
      transition: 'opacity 0.3s'
    };

    const placeholderStyle = {
      width,
      height,
      filter: 'blur(10px)',
      'WebkitFilter': 'blur(10px)',
      opacity: this.state.hasImageLoaded ? 0 : 1,
      transition: 'opacity 0.4s',
      'transitionDelay': '0.1s'
    };

    return (
      <div className="ProgressiveImage" style={{width, height, position: 'relative'}}>
        <img className="fullImage"
             src={src}
             style={fullImageStyle}
             onLoad={::this.handleLoad} />

        <img className="placeholderImage"
             src={placeholderSrc}
             style={placeholderStyle} />

      </div>
    );
  }
}
