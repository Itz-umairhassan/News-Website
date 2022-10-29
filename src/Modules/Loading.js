import react, { Component } from "react";
import spinner from '../spinner.gif'
export default class Loading extends Component {

    render() {
        return (
            <div className="text-center">
                <img style={{
                    height: "45px",
                    // display:"block",
                    // margin:"auto"
                }}
                    src={spinner} alt="" />
            </div>
        );
    }
}
