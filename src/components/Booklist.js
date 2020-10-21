import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import contextType from "react";
class Booklist extends Component {
  state = {};
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Deep work - Cal Newport</li>
          <li style={{ background: theme.ui }}>Ikagai- Hector garcia</li>
          <li style={{ background: theme.ui }}>Grit - Angela Duckworth</li>
          <li style={{ background: theme.ui }}>
            How not to Die - Michael Gregger
          </li>
          <li style={{ background: theme.ui }}>Principles - Ray Dalio</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
