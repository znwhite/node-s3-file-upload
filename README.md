<h4>A minimal boilerplate for beginning a node/express/pg/grpahql/typescript API.</h4>

This server will establish a pool connection to a PostgreSQL instance, and assume it has a database with a table called <code>fruit</code> with fields "id", "name", and "datecreated."

This will connect well to an AWS RDS PostgreSQL instance, for example. 

I would recommend something like Apollo Client be installed in a frontend to query this API.

<h2>Viable queries</h2>

<pre>
<code>
// all fruit 

{
  fruit{
    id
    name
    datecreated
  }  
}
</code>
</pre>

<pre>
<code>
// fruit by id

{
  fruit(id: 1){
    id
    name
  }  
}
</code>
</pre>


<pre>
<code>
// add fruit, return name

mutation {
  addFruit(name: "pineapple") {
    name
  }
}
</code>
</pre>
