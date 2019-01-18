import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classify from 'src/classify';
import defaultClasses from './thumbnail.css';
import makeMediaUrl from 'src/util/makeMediaUrl';
import { transparentPlaceholder } from 'src/shared/images';

class Thumbnail extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            root: PropTypes.string
        })
    };

    render() {
        const { classes, item } = this.props;
        const src = item.file
            ? makeMediaUrl(item.file, { type: 'product', width: 240 })
            : transparentPlaceholder;

        return (
            <div className={classes.root}>
                <img className={classes.image} src={src} alt={item.label} />
            </div>
        );
    }
}

export default classify(defaultClasses)(Thumbnail);
