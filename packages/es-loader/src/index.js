import { getOptions } from 'loader-utils';
import webpack = require('webpack')
export default async function loader(source) {

  const options = getOptions(this);
  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
  source = source.replace(/\[name\]/g, options.name);
  return  `${esModule ? 'export default' : 'module.exports ='} ${ JSON.stringify(source) }`;
}
