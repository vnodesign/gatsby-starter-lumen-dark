import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

export default class FacebookComment extends React.PureComponent {
  state = { show: false };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.timeout = setTimeout(this.onScroll, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    clearTimeout(this.timeout);
  }

  onScroll = () => {
    this.setState({ show: true });
    window.removeEventListener('scroll', this.onScroll);
  };

  render() {
    if (!this.state.show) {
      return <div style={{ paddingBottom: '100px' }} />;
    }

    const { fbCommentUrl } = this.props;
    if (fbCommentUrl === 'none') {
      return null;
    }

    const { url } = this.props;
    const { appId } = this.props.facebookComment;

    return (
      <FacebookProvider appId={appId}>
          {fbCommentUrl
            ? <Comments href={fbCommentUrl} numPosts={100} mobile={true} lazy={true} />
            : (
              <>
                <Comments href={url} numPosts={100} mobile={true} lazy={true} />
                <Comments href={url.replace('http://', 'https://')} numPosts={100} mobile={true} lazy={true} />
              </>
            )}
      </FacebookProvider>
    );
  }
}