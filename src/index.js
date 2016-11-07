import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.get('/', ( req, res) => {
  res.json({
    hello: 'JS World',
  })
})

app.get('/task2a', (req, res) => {
  const sum = (Number(req.query.a) || 0) + (Number(req.query.b) || 0)
  res.send(sum.toString())
})
app.listen(3000, () => {
  console.log('Port 3000')
})
