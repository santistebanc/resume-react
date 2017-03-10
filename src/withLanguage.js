import React from 'react';

export default (Component, content) => ({lang}) => <Component lang={lang} text={Object.keys(content).reduce((obj, k, i) => ({...obj, [k]: content[k][lang] }), {})}/>
