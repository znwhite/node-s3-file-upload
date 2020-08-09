export{}
const graphql = require("graphql");
const db = require("../../db/index");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { FruitType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addFruit: {
      type: FruitType,
      args: {
        name: { type: GraphQLString }
      },
      async resolve(parentValue: any, args: any) {
        const query = {
            text: `INSERT INTO fruit(name) VALUES ($1) RETURNING name`,
            values: [args.name],
        };
        
        const data = await db.query(query);

        return data
      }
    }
  }
});

exports.mutation = RootMutation;