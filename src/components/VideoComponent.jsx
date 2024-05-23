import PropTypes from 'prop-types';

const VideoComponent = ({ src, width = 600, height = 400, controls = false, autoplay = true, loop = true, muted = true }) => {
  return (
    <div>
      <video
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

VideoComponent.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
};


export default VideoComponent;
