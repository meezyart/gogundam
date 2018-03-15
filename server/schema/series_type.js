
const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
// const Series = mongoose.model('series');

const SeriesType = new GraphQLObjectType({
  name:  'SeriesType',
  fields: () => ({
    id: { type: GraphQLID },
    release_date: { type: GraphQLInt },
    gundam: {
      type: require('./gundam_type'),
      resolve(parentValue) {
        return Series.findById(parentValue).populate('gundam')
          .then(Series => {
            console.log(Series)
            return Series.series
          });
      }
    }
  })
});

module.exports = SeriesType;
