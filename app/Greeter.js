/**
 * Created by Admin on 2017/9/12.
 */

import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'


/*
var config = require('./config.json');

module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};*/

class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
                {config.greetText}
            </div>

        );
    }
}


export default Greeter