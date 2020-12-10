import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeindex: "",
      title: ""
    };
  }

  //FUNCTION TO CHANGE LIST STATE
  changeListstate = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  //FUNCTION TO SET ACTIVE ITEM IN THE LIST

  render() {
    const { onChange, className } = this.props;

    const listSetitem = item => {
      this.setState(
        {
          value: "",
          isOpen: false,
          activeindex: item.name,
          title: item.name
        },
        () => {
          onChange(this.state.title);
        }
      );
    };

    return (
      <div
        className={classnames({ dropdown: true, [className]: className })}
        onClick={() => this.changeListstate()}
      >
        <div
          className="dropdown__header"
          onClick={() => this.changeListstate()}
        >
          <input
            className="dropdown__header__input"
            type="text"
            value={this.state.activeindex}
            placeholder={this.props.value}
            disabled
          />

          <div className="dropdown__header__arrow-down" />
        </div>

        {this.state.isOpen && (
          <div className="dropdown__list">
            {this.props.options.map((item, index) => (
              <li
                className={
                  this.state.activeindex === item.name
                    ? "dropdown__list__item dropdown__list__item--active"
                    : "dropdown__list__item dropdown__list__item--inactive"
                }
                key={index}
                onClick={() => {
                  listSetitem(item);
                  onChange(this.state.title);
                }}
              >
                {item.name}
              </li>
            ))}
            {this.props.options.length == 0 && (
              <div className="dropdown__list__empty">
                No items to be displayed
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  options: [],
  onChange: () => {},
  value: "",
  className: ""
};

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Dropdown;
