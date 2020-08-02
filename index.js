'use strict';

module.exports = (metaData, options, badgen) => {
    const {'dist-tags': {latest: version}} = metaData;

    return badgen({label: 'latest', status: `${options.prefix}${version}`, style: 'flat', scale: 1.5});
};
