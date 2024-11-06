const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
  ];
  const findEmployeeById=(employees,Id)=>{
    return employees.find(element=>element.id===Id)
  }
  console.log(findEmployeeById(employees,2))