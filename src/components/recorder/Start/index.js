'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Start extends React.Component {
    static TITLE      = 'Recorder#start';
    static CLASS_NAME = 'Start';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <section className={Start.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>start</h1>
                        <p className="returns">Returns : <span>Recorder</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method starts recording.
                    </p>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='Recorder#start | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/ZoqQvo/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/ZoqQvo/'>Recorder#start | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </section>
        );
    }
}

export default connect()(Start);
