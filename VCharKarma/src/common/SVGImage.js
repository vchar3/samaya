import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const firstHtml =
  '<html><head><style>html, body { margin:0; padding:0; overflow:hidden; background-color: transparent; } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>';
const lastHtml = '</body></html>';

class SVGImage extends Component {
    state = { svgContent: null, source: this.props.source };

    componentDidMount() {
      const uri = resolveAssetSource(this.state.source);
      console.log('svg image source ',uri);
      fetch(uri)
      .then(res => res.text())
      .then(text => {
        this.setState({ svgContent: text });
      })
      .catch(err => {
        console.error('got error', err);
      })
      .finally(() => {
        this.props.onLoadEnd && this.props.onLoadEnd();
      });

     
    }

    render() {
        const props = this.props;      
        const { svgContent } = this.state;
       //if (svgContent) {
            return (
              <View pointerEvents="none" style={[props.style, props.containerStyle]}>
                <WebView
                  originWhitelist={['*']}
                  scalesPageToFit={true}
                  style={[
                    {
                      width: 200,
                      height: 100,
                      backgroundColor: 'transparent',
                    },
                    props.style,
                  ]}
                  scrollEnabled={false}
                  source={{ html: `${firstHtml}${svgContent}${lastHtml}` }}
                />
              </View>
            );
         //}
    }
}
export default SVGImage;
