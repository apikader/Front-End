let employee = {
    employeeName: "John Doe",
    employeeId: 12345,
    salary: 50000
  };
  let manager = Object.create(employee);
  manager.managerName = "Jane Smith";
  manager.branch = "New York";
  console.log("Employee Name: " + manager.employeeName);
  console.log("Employee ID: " + manager.employeeId);
  console.log("Salary: " + manager.salary);
  console.log("Manager Name: " + manager.managerName);
  console.log("Branch: " + manager.branch);
  