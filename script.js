document.addEventListener("DOMContentLoaded", function () {
  console.log('DOM content loaded');
    
    fetch('https://run.mocky.io/v3/0dafcbfd-fcfb-4295-abe0-e643a8d4ac29')
      .then(response => response.json())
      .then(data => {
        const companyDropdown = document.getElementById('company');
        data.companies.forEach(company => {
          const option = document.createElement('option');
          option.value = company.name; 
          option.textContent = company.name;
          companyDropdown.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching company data:', error));
 

   fetch('https://run.mocky.io/v3/98f94856-2a45-4eab-bd20-61032dbde2c5')
      .then(response => response.json())
      .then(data => {
        const subjectDropdown = document.getElementById('subject');
        data.subjects.forEach(subject => {
          const option = document.createElement('option');
          option.value = subject.name; 
          option.textContent = subject.name;
          subjectDropdown.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching subject data:', error));
    
    });

      function validateForm() {
        var name = document.getElementById("name").value;
        var lastName = document.getElementById("last-name").value;
        var company = document.getElementById("company").value;
        var email = document.getElementById("email").value;
        var areaCode = document.getElementById("area-code").value;
        var phoneNumber = document.getElementById("phone-number").value;
        var subject = document.getElementById("subject").value;
        var radioOption = document.querySelector('input[name="radio-option"]:checked');
      
       
        if (name === "" || lastName === "" || company === "" || email === "" || areaCode === "" || phoneNumber === "" || subject === "" || !radioOption) {
          alert("All fields are required!");
          return false;
        }
      
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address!");
          return false;
        }
      
       
        var phoneRegex = /^\d{10}$/; 
        if (!phoneRegex.test(phoneNumber)) {
          alert("Please enter a valid phone number!");
          return false;
        }
      
      
        return true; 
      }
      

    