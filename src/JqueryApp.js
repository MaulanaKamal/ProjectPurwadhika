import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'

import React, { Component } from 'react';
import '../styles/Header.css'


export default class JqueryApp extends Component {
  render() {
    return (
        $('.ui.sticky')
        .sticky({
          context: '#context'
        })
      ;
      </div>
    );
  }
}
