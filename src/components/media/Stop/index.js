'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Stop extends React.Component {
    static TITLE      = 'MediaModule#stop';
    static CLASS_NAME = 'Stop';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <section className={Stop.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>stop</h1>
                        <p className="returns">Returns : <span>MediaModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method stops media.
                    </p>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='MediaModule#stop | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/VXLeYq/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/VXLeYq/'>MediaModule#stop | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </section>
        );
    }
}

export default connect()(Stop);
