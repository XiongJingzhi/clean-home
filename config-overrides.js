const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    // eslint-disable-next-line no-useless-computed-key
    ["@styles"]: path.resolve(__dirname, "./src/components/styles/"),
    // eslint-disable-next-line no-useless-computed-key
    ["@icons"]: path.resolve(__dirname, "./src/assets/icons/"),
    // eslint-disable-next-line no-useless-computed-key
    ["@"]: path.resolve(__dirname, "./src/"),
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addDecoratorsLegacy()
)
