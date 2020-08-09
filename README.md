extremely basic boilerplate for beginning a node/express/pg API with TypeScript

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
