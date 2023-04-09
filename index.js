// Write your solution in this file!
const employee = {
    name: "Kevin",
    streetAddress: "102 Maple Street",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...employee,
        [key] : value,
    } 
};

const updatedEmployee = updateEmployeeWithKeyAndValue(
        employee,
        "name",
        "Josh",
    );

console.log(updatedEmployee);

    // -----------------------------------------------------


function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Herald Square");

// ----------------------------------------------------------------

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
};

deleteFromEmployeeByKey(employee, "name");

// --------------------------------------------------------------

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

destructivelyDeleteFromEmployeeByKey(employee, "name");