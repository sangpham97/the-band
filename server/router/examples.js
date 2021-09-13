const router = require('express').Router()
const Example = require('../models/Example')

//CREATE
router.post('/', async (req, res) => {
  const newExample = new Example(req.body)

  try {
    const savedExample = await newExample.save()
    res.status(200).json(savedExample)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ALL

router.get('/', async (req, res) => {
  try {
    const examples = await Example.find()
    res.status(200).json(examples.reverse())
  } catch (err) {
    res.status(500).json(err)
  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const exampleUpdate = await Example.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(exampleUpdate)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
