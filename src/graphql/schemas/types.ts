const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const FruitType = new GraphQLObjectType({
  name: "Fruit",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    datecreated: { type: GraphQLString }
  }
});

exports.FruitType = FruitType;