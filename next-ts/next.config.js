/** @type {import('next').NextConfig} */

const { withTamagui } = require('@tamagui/next-plugin')

module.exports = function (_, { defaultConfig }) {
  let config = {
    ...defaultConfig,
  }

  const tamaguiPlugin = withTamagui({
    config: './src/tamagui/config.ts',
    components: ['tamagui'],
    outputCSS:
      process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    doesMutateThemes: true,
  })

  return {
    ...config,
    ...tamaguiPlugin(config),
  }
}
