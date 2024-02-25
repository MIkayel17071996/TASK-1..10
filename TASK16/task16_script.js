const employees = [
    {
      ID: 1,
      Name: "John Doe",
      Age: 30,
      Department: "Engineering",
      Role: { Title: "Frontend Developer", Level: "Mid" },
      Email: "john.doe@example.com",
      Phone: "123-456-7890",
      Skills: ["JavaScript", "React", "CSS"]
    },
    {
      ID: 2,
      Name: "Jane Smith",
      Age: 28,
      Department: "Design",
      Role: { Title: "UI/UX Designer", Level: "Senior" },
      Email: "jane.smith@example.com",
      Phone: "098-765-4321",
      Skills: ["Figma", "Sketch", "Adobe XD"]
    },
    {
      ID: 3,
      Name: "Tommy Smith",
      Age: 33,
      Department: "Design",
      Role: { Title: "Software Engineer", Level: "Senior" },
      Email: "tommy.smith@example.com",
      Phone: "098-555-4321",
      Skills: ["Java", "Python", "C++"]
    },
    {
      ID: 4,
      Name: "Harry Smith",
      Age: 30,
      Department: "IT",
      Role: { Title: "Software Engineer", Level: "Senior" },
      Email: "Harry@example.com",
      Phone: "123-456-7890",
      Skills: ["JavaScript", "HTML", "CSS"]
    },
    {
      ID: 5,
      Name: "Fiona Rose",
      Age: 25,
      Department: "HR",
      Role: { Title: "HR Manager", Level: "Manager" },
      Email: "rose@example.com",
      Phone: "987-654-3210",
      Skills: ["Recruitment", "Employee Relations", "Training"]
    }
  ];
  
  
  
  
  
 
  function generateTableRows() {
    const tbody = document.getElementById('employeeTableBody');
    tbody.innerHTML = ''; 
  
    employees.forEach(employee => {
      const row = document.createElement('tr');
  
    
      for (const key in employee) {
        if (key === 'Skills') {
          const skills = employee[key].join(', ');
          const cell = document.createElement('td');
          cell.textContent = skills;
          row.appendChild(cell);
        } else if (typeof employee[key] === 'object') {
         
          const subObj = employee[key];
          for (const subKey in subObj) {
            const cell = document.createElement('td');
            cell.textContent = subObj[subKey];
            row.appendChild(cell);
          }
        } else {
          const cell = document.createElement('td');
          cell.textContent = employee[key];
          row.appendChild(cell);
        }
      }
  
      tbody.appendChild(row);
    });
  }
  
  generateTableRows();
  