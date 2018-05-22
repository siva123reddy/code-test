import React from 'react';
import "./App.css";


class SelectComponent extends React.Component {
    constructor() {
        super();
        this.state= {selectedSet:  new Set(), ownData: "", caution : true }
        this.getSelected= this.getSelected.bind(this);
        this.normalRender= this.normalRender.bind(this);
        this.finalRender= this.finalRender.bind(this);
        this.addData= this.addData.bind(this);
    }
    addData(e){
        var data = e.target.value;
        var joined = this.state.selectedSet.add(data);
        this.setState({ seletedData: joined })
    }
    getSelected (e) {
        var self = this;
        let data = this.props.state.all_data;
        var SelId = e.target.value;
        var owner;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == SelId) {
                owner = data[i];
                break;
            }
        }
        if (owner) {
            self.setState({ownData: owner})
            if(owner.threatLevel==3 || owner.threatLevel==4){
                self.setState({caution: true})
            }
            else
            {
                self.setState({caution: false})
            }

        }
    }
    normalRender(){
        return (
           <div>
                <p className="list">{this.state.ownData.name}: </p>
                <p className="listval"> {this.state.ownData.threatText} </p>
            </div>

        )
    }

    finalRender(){
        return (
                <div className="form">
                    <p className="list">{this.state.ownData.name}</p>
                    <button className="list" ref="btn" onClick={this.addData} value={this.state.ownData.name}>Add</button>

                </div>
        )
    }
    render () {
        let planets = this.props.state.all_data;
        let optionItems = planets.map((data) =>
            <option key={data.id} value={data.id}>{data.name}</option>
        );
        let array = Array.from(this.state.selectedSet);
        let divItems = array.map( ( item, index ) => {
            return <li key={index}>{item}</li>
        });
        return(
            <div>
                <select onChange={this.getSelected}>
                    {optionItems}
                </select>
                <br/>
                <br/>

                {(this.state.caution)?this.normalRender():this.finalRender()}
                <br/>
                <br/>
                <div>
                    {divItems}
                </div>
            </div>
                )
           }



}
export default SelectComponent;