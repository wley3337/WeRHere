import React, { Component} from 'react'
import HiddentToStart from './hiddenToStart.js'
import { Feature } from 'react-mapbox-gl';

class MyMap extends Component {
    state ={
        detailObj: {}
    }

    handleOnClick = (focusObj) =>{
        this.setState({
            detailObj: focusObj
        })
    }

    handleClearFocus = () =>{
        this.setState({
            detailObj: {}
        })
    }

    render(){
        return(
            <div>   
                {/* conditionally render this component */}
                { this.state.detailObj.name ? 
                    <HiddenToStart 
                        featureToDisplay={this.state.detailObj}
                        clearFocus={this.handleClearFocus}
                    /> 
                :
                    null
                }

                <Layer>

                    { this.props.allFeatures.map(featureObj =>
                            <Feature 
                            featureToDisplay={featureObj}
                            onClick={() =>{this.handleOnClick(featureObj)}}
                            />
                    
                    )}
                </Layer>

            </div>
        )
    }
}