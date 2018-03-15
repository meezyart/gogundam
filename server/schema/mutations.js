const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const GundamType = require('./gundam_type');
// const Gundam = mongoose.model('gundam');
// const Series = mongoose.model('series');
// const SeriesType = require('./series_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGundam: {
      type: GundamType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { title }) {
        // return (new Series({ title })).save()
      }
    }
  }
});

module.exports = mutation;
