import React from 'react'
import WithHandle from './WithHandle'

const InvertHandle = ({ children }) => (
  <WithHandle invert>{children}</WithHandle>
)

export default InvertHandle