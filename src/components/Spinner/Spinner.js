import React from "react";
import Loader from "react-loader-spinner";
import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Spinner.css";

class Spinner extends React.Component {
  render() {
    return (
      <Loader
        className="loader"
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    );
  }
}
export default Spinner;
