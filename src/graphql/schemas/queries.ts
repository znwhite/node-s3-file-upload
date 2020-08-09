export { };
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { FruitType } = require("./types");
const db = require("../../db/index");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: { 
        fruit: {
            type: new GraphQLList(FruitType),
            args: { id: { type: GraphQLID } },
            async resolve(parentValue: any, args: any) {
                if(args.id){
                    const query = {
                        text: 'SELECT name, id, datecreated from fruit WHERE id = $1',
                        values: [args.id],
                    };
    
                    try {
                        const data = await db.query(query);
                        return data.rows;
                    } catch (err) {
                        console.log(err);
                        return err;
                    }
                } else {
                    const query = {
                        text: 'SELECT name, id, datecreated from fruit'
                    };
    
                    try {
                        const data = await db.query(query);
                        return data.rows;
                    } catch (err) {
                        console.log(err);
                        return err;
                    }
                }
            }
        },
    }
});

exports.query = RootQuery;

// https://blog.harveydelaney.com/setting-up-graphql-express-and-postgresql/