import React, { Component } from 'react'
import './loader.css'

export class Loader extends Component {
  render() {
    return (
        <div id="root">
            <div class="loader-wrapper">
                <div class="loader"></div>
            </div>
        </div>
    )
  }
}

export default Loader
