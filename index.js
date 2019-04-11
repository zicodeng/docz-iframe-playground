import React from 'react';
import ReactDOM from 'react-dom';

class IFramePlayground extends React.Component {
  ref = React.createRef(); // <iframe> ref
  state = {
    container: null, // container within which the user content should be rendered
  };

  /**
   * Because <iframe> serves content in an isolated browsing context (document environment),
   * Styles in parent browsing context will not be available to <iframe> content,
   * we need to manually copy styles from parent browsing context to <iframe> browsing context
   */
  copyStyles = () => {
    const iFrameNode = this.ref.current;
    if (iFrameNode && iFrameNode.contentDocument) {
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
    }
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
      this.copyStyles();
    }
  };

  render() {
    const { children, style } = this.props;
    const { container } = this.state;
    const iFrameNode = this.ref.current;
    return (
      <iframe
        sandbox="allow-same-origin"
        ref={this.ref}
        srcDoc={'<!DOCTYPE html>'}
        style={{
          width: '100%',
          border: 'none',
          ...style,
        }}
      >
        {container &&
          iFrameNode &&
          iFrameNode.contentDocument &&
          ReactDOM.createPortal(children, container)}
      </iframe>
    );
  }

  componentDidMount() {
    const iFrameNode = this.ref.current;
    if (iFrameNode) {
      iFrameNode.addEventListener('load', this.handleLoad);
    }
  }
}

export default IFramePlayground;
