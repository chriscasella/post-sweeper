import React, { Component } from "react";
import axios from 'axios';

class HomeContainer extends Component {
    constructor(){
        super();
        this.state = {
            keywords:null,
            zipcode: null,
            city: null    
        }
        this.getStuff();
    }
    getStuff = () => {
        axios.get('http://localhost:8080/').then(res => {
            console.log('this is userprefs?', res)
            const r = res.data[0];
            this.setState((state, props) =>({
                keywords: r.keywords,
                zipcode: r.zipcode,
                city: r.city
            }));
            console.log(this.state,r )
        });
    }
    render(){
        return(
            <div>
                {
                    this.state.city ? 
                    this.state.city :
                    null
                }
            </div>
        )
    }
}

export default HomeContainer;