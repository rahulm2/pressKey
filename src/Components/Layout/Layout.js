import React, { PureComponent } from "react";

class Layout extends PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Layout;
