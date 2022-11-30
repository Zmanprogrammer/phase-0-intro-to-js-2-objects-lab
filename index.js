// Write your solution in this file!

const employee = {
    name: "Sam",
    address: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee

}

function deleteFromEmployeeByKey(employee, key) {
const employeecopy = Object.assign({}, employee)
delete employeecopy[key]
return employeecopy
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    return employee
}
    