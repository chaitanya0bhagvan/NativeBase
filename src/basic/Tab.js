import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Tab extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

Tab.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledTab = connectStyle('NativeBase.Tab', {}, mapPropsToStyleNames)(Tab);

export {
  StyledTab as Tab,
};
