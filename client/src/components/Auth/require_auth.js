import React, { Component } from 'react';
import { connect } from 'react-redux';
import browserHistory from '../../utils/history';

export default function (ComposedComponent) {
    class Authentication extends Component {
        componentWillMount () {
            if (!this.props.authenticated) {
                browserHistory.push('/');
            }
        }

        componentWillUpdate (nextProps) {
            if (!nextProps.authenticated) {
                browserHistory.push('/');
            }
        }

        render () {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps (state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
