import React, { Component } from 'react'
import Select from 'react-select'
import { colourOptions } from './data.ts';

export default () => (
  <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);