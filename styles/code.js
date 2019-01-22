
import { monoFont, colors } from './variables'

export default {
  'code[class*="language-"]': {
    color: '#393A34',
    fontWeight: 'bold',
    fontFamily: monoFont,
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    fontSize: '0.95em',
    lineHeight: '1.2em',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#393A34',
    fontFamily: monoFont,
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    fontSize: '0.95em',
    lineHeight: '1.2em',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    border: '1px solid #dddddd',
    backgroundColor: 'white',
    boxShadow: '0 0 14px rgba(0, 0, 0, 0.1)',
  },
  'pre[class*="language-"]::-moz-selection': {
    background: '#b3d4fc',
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: '#b3d4fc',
  },
  'code[class*="language-"]::-moz-selection': {
    background: '#b3d4fc',
  },
  'code[class*="language-"] ::-moz-selection': {
    background: '#b3d4fc',
  },
  'pre[class*="language-"]::selection': {
    background: '#b3d4fc',
  },
  'pre[class*="language-"] ::selection': {
    background: '#b3d4fc',
  },
  'code[class*="language-"]::selection': {
    background: '#b3d4fc',
  },
  'code[class*="language-"] ::selection': {
    background: '#b3d4fc',
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '.2em',
    paddingTop: '1px',
    paddingBottom: '1px',
    background: '#f8f8f8',
    border: '1px solid #dddddd',
  },
  comment: {
    color: '#999988',
    fontStyle: 'italic',
  },
  prolog: {
    color: '#999988',
    fontStyle: 'italic',
  },
  doctype: {
    color: '#999988',
    fontStyle: 'italic',
  },
  cdata: {
    color: '#999988',
    fontStyle: 'italic',
  },
  namespace: {
    Opacity: '.7',
  },
  string: {
    color: colors.green[500],
  },
  'attr-value': {
    color: colors.blue[300],
  },
  punctuation: {
    color: '#393A34',
  },
  operator: {
    color: '#393A34',
  },
  entity: {
    color: '#36acaa',
  },
  url: {
    color: '#36acaa',
  },
  symbol: {
    color: '#36acaa',
  },
  number: {
    color: '#36acaa',
  },
  boolean: {
    color: '#36acaa',
  },
  variable: {
    color: '#36acaa',
  },
  constant: {
    color: '#36acaa',
  },
  property: {
    color: '#36acaa',
  },
  regex: {
    color: '#36acaa',
  },
  inserted: {
    color: '#36acaa',
  },
  atrule: {
    color: colors.blue[300],
  },
  keyword: {
    color: colors.blue[300],
  },
  'attr-name': {
    color: colors.blue[300],
  },
  '.language-autohotkey .token.selector': {
    color: colors.blue[300],
  },
  function: {
    color: colors.red[500],
    fontWeight: 'bold',
  },
  deleted: {
    color: colors.green[500],
  },
  '.language-autohotkey .token.tag': {
    color: colors.green[500],
  },
  tag: {
    color: colors.green[500],
  },
  selector: {
    color: colors.blue[700],
  },
  '.language-autohotkey .token.keyword': {
    color: colors.blue[700],
  },
  important: {
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};
