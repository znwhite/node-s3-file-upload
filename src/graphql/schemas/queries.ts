export { };
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { FruitType } = require("./types");
const db = require("../../db/index");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        fruit: {
            type: FruitType,
            args: { id: { type: GraphQLID } },
            async resolve(parentValue: any, args: any) {
                const query = {
                    text: 'SELECT name, id, datecreated from fruit WHERE id = $1',
                    values: [args.id],
                };

                try {
                    const data = await db.query(query);
                    return data.rows[0]
                } catch (err) {
                    console.log(err);
                    return err;
                }
            }
        }
    }
});

exports.query = RootQuery;

// https://blog.harveydelaney.com/setting-up-graphql-express-and-postgresql/