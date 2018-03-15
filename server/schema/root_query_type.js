const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const GundamType = require('./gundam_type');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    gundams: {
        type: new GraphQLList(GundamType),
        resolve() {
          return Gundam.find({})
        }
    },
    gundam: {
      type: GundamType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Gundam.findById(id);
      }
    }
 
  })
});

module.exports = RootQuery;
