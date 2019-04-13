import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './IFramePlayground.css';
const cx = classNames.bind(styles);

class IFramePlayground extends React.Component {
  ref = React.createRef(); // <iframe> ref
  state = {
    container: null, // container within which the user content should be rendered
    width: 0, // iframe width
    height: 0, // iframe height
    isResizing: false, // is the user currently resizing IFramePlayground?
    direction: 'horizontal', // resizing direction
  };

  /**
   * Because <iframe> serves content in an isolated browsing context (document environment),
   * Styles in parent browsing context will not be available to <iframe> content,
   * we need to manually copy styles from parent browsing context to <iframe> browsing context
   */
  copyStyles = iFrameNode => {
    // Copy <link> elements
    const links = Array.from(document.getElementsByTagName('link'));
    links.forEach(link => {
      if (link.rel === 'stylesheet') {
        iFrameNode.contentDocument.head.appendChild(link.cloneNode(true));
      }
    });

    // Copy <style> elements
    const styles = Array.from(document.head.getElementsByTagName('style'));
    styles.forEach(style => {
      iFrameNode.contentDocument.head.appendChild(style.cloneNode(true));
    });
  };

  /** Once <iframe> is fully loaded, we can then determine its size */
  setSize = iFrameNode => {
    const { enableResizing } = this.props;

    // Determine width
    const parentNode = iFrameNode.parentNode;
    const width = enableResizing ? parentNode.offsetWidth : '100%';

    // Determine height
    const childNodes = Array.from(iFrameNode.contentDocument.body.childNodes);
    const height = childNodes.reduce(
      (prevVal, childNode) => prevVal + childNode.offsetHeight,
      0,
    );

    this.setState({
      width,
      height,
    });
  };

  handleLoad = () => {
    const iFrameNode = this.ref.current;
    if (
      iFrameNode &&
      iFrameNode.contentDocument &&
      iFrameNode.contentDocument.body
    ) {
      this.setState({
        container: iFrameNode.contentDocument.body,
      });
      this.copyStyles(iFrameNode);
      this.setSize(iFrameNode);
    }
  };

  handleResizeStart = (e, direction) => {
    e.preventDefault();
    window.addEventListener('mousemove', this.handleResize);
    window.addEventListener('mouseup', this.handleResizeStop);
    this.setState({
      isResizing: true,
      direction,
    });
  };

  handleResize = e => {
    const { minWidth, minHeight } = this.props;
    const { direction, width, height } = this.state;
    if (direction === 'vertical') {
      const newHeight = height + e.movementY;
      this.setState({
        height: newHeight < minHeight ? minHeight : newHeight,
      });
    } else {
      const newWidth = width + e.movementX;
      this.setState({
        width: newWidth < minWidth ? minWidth : newWidth,
      });
    }
  };

  handleResizeStop = () => {
    this.removeEventListeners();
    this.setState({
      isResizing: false,
    });
  };

  removeEventListeners = () => {
    window.removeEventListener('mousemove', this.handleResize);
    window.removeEventListener('mouseup', this.handleResizeStop);
  };

  render() {
    const { children, style, enableResizing } = this.props;
    const { container, width, height, isResizing } = this.state;
    const iFrameNode = this.ref.current;
    return (
      <div className={cx('playground')}>
        <iframe
          sandbox="allow-same-origin"
          ref={this.ref}
          srcDoc={'<!DOCTYPE html>'}
          className={cx('iframe')}
          style={{
            width,
            height,
            pointerEvents: isResizing ? 'none' : 'all',
            ...style,
          }}
        >
          {container &&
            iFrameNode &&
            iFrameNode.contentDocument &&
            ReactDOM.createPortal(children, container)}
        </iframe>
        {enableResizing && (
          <React.Fragment>
            <div
              className={cx('resize-controller', 'height-resize-controller')}
              onMouseDown={e => this.handleResizeStart(e, 'vertical')}
              style={{
                width,
              }}
            />
            <div
              className={cx('resize-controller', 'width-resize-controller')}
              onMouseDown={e => this.handleResizeStart(e, 'horizontal')}
              style={{
                left: width,
              }}
            />
          </React.Fragment>
        )}
      </div>
    );
  }

  componentDidMount() {
    const iFrameNode = this.ref.current;
    if (iFrameNode) {
      iFrameNode.addEventListener('load', this.handleLoad);
    }
  }

  componentWillMount() {
    this.removeEventListeners();
  }
}

IFramePlayground.propTypes = {
  /**
   * If enabled, resize controller will be available.
   * You can use it to control `<frame>` viewport size instead of using Docz Playground resize controller
   * */
  enableResizing: PropTypes.bool,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
};

IFramePlayground.defaultProps = {
  enableResizing: false,
  minWidth: 200,
  minHeight: 200,
};

export default IFramePlayground;
