const express = require('express')
const next = require('next')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  const schema = buildSchema(`
    type Query {
      hello: String
    }
  `);

  const resolver = {
    hello: () => "Hello GraphQL!"
  }

  server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  }))

  server.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})