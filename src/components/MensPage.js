import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMens } from "../action";
import { Link } from "react-router-dom";

class MensPage extends Component {
  componentDidMount() {
    this.props.fetchMens();
  }
  renderMensClothes = () => {
    return this.props.mens.map(men => {
      return (
        <Link to={`/mens/${men.id}`} className="ui centered card">
          <div className="image">
            <img src={`${men.imageUrl}`} />
          </div>
          <div className="content">
            <div className="header">{men.name}</div>
          </div>
        </Link>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div>{this.renderMensClothes()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    mens: state.mens
  };
};

export default connect(mapStateToProps, { fetchMens })(MensPage);
