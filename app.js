import express from "express"
const app = express()
import employees from "#db/employees"

app.route('/').get((req,res) => {
    res.send("Hello employees!")
})

app.route('/employees').get((req,res) => {
    res.send(employees)
})

app.route('/employees/random').get((req,res) => {
    const randomIdx = Math.floor(Math.random() * employees.length)
    const randomEmployee = employees[randomIdx]
    res.json(randomEmployee)
})

app.route('/employees/:id').get((req,res) => {
    const id = Number(req.params.id)
    const found = employees.find(employee => employee.id === id)
    if(found) {
        res.status(200).json(found)
    }else {
        res.status(404).send("There is no employee with that id")
    }
})



export default app