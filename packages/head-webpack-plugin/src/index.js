const replaceRE = /(<\/head>)/i
class HeadWebpackPlugin {
  constructor(name) {
    this._name = name; 
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('HeadWebpackPlugin', async (compilation, cb) => {
      const assets = compilation.assets;
      let head = ''
      this._name.forEach(element => {
        const metaKey = Object.keys(element).map(ele => {
          return ele + '="' + element[ele] + '"'
        }).join(' ')
        head += `<meta ${metaKey} />\n`
      });
      const content = assets["index.html"].source().replace(replaceRE, `${head}$1`);
      assets["index.html"] = {
        source() {
          return content
        },
        size: function() {
          return content.length;
        }
       
      }
      cb()
    });
  }
}

module.exports = HeadWebpackPlugin
