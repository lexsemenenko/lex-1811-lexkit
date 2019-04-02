module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: [browsersYearsBack(10), 'not dead']
    },
    autoprefixer: {}
  }
};

function browsersYearsBack(years) {
  return `since ${new Date().getFullYear() - years || '2010'}`;
}
