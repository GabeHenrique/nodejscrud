const router = require('express').Router();
const Person = require("../models/Person");

router.post('/', async (req, res) => {
    const {name, salary, approved } = req.body;

    if (!name || !salary || !approved) {
        return res.status(400).send('Missing fields');
    }
    const person = new Person({name, salary, approved});
    try {
        await Person.create(person);
        res.status(201).json({message: `${name} was successfully added to the database`});
    } catch (error) {
        res.status(500).json({error: error});
    }
})

router.get('/', async (req, res) => {
    const people = await Person.find();
    res.status(200).json(people);
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const person = await Person.findById(id);
    res.status(200).json(person);
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params.id;
    await Person.findOneAndDelete(id);
    res.status(200).json('Person deleted');

})

module.exports = router;
