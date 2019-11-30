import React, { Component } from "react";
import OptionsSelection from '../OptionsSelection/OptionsSelection';

class AllOptions extends Component {
    render( {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <OptionsSelection />
            </form>
        )
    })
}