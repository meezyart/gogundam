

const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList,GraphQLInt } = graphql;
const SeriesType = require('./series_type');


const GundamType = new GraphQLObjectType({
  name:  'GundamType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: {type: GraphQLInt},
    image: {type: GraphQLString},
    series: {
      type: new GraphQLList(SeriesType),
      resolve(parentValue) {
        return Gundam.findSeries(parentValue.id);
      }
    }
  })
});

module.exports = GundamType;
