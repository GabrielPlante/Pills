import React, {Component} from "react";
import {ListGroup} from "react-bootstrap";
import Rappel from "./rappel_component";
import {rappelsData} from "../utils/all_rappels"


class Rappels_list extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {
            data: rappelsData
        }
    }

    close = (text:string, item) => {
        /*  console.log(this.state.data.length)
        const i = this.state.data.indexOf(item)
        const tmp = this.state.data
        tmp.splice(i,1)
        this.setState({data :tmp})
        console.log(this.state.data.length)*/
        const i = this.props.data.indexOf(item)
        const tmp = this.props.data
        tmp.splice(i,1)
        tmp.map((i) => {
            console.log(i.jour + i.heure)
        })
        this.props.setProps(tmp);
        this.setState({data :tmp})

    }


    render() {
        return (
            <div>
                <h1>Mes Rappels</h1>
                <ListGroup>
                    {this.state.data.map((item) =>
                        <ListGroup.Item>
                            <Rappel item = {item}  close={this.close}> </Rappel>
                            <br/>
                        </ListGroup.Item>
                    ) }
                </ListGroup>
            </div>

        );
    }
}


export default Rappels_list;
