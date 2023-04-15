// Selecting the form and result elements from the HTML
const form = document.getElementById('carbon-form');
const result = document.getElementById('carbon-result');

// Defining the carbon emissions per mile based on fuel type
const carbonEmissions = {
  petrol: 0.3204, // in pounds of CO2 per mile
  diesel: 0.3507, // in pounds of CO2 per mile
  electric: 0.1172, // in pounds of CO2 per mile
};

// Adding a listener to the form for when it's submitted
form.addEventListener('submit', (event) => {
  event.preventDefault(); // preventing the default form submission behavior

  // Extracting the values from the input fields
  const distance = Number(document.getElementById('distance').value);
  const fuelType = document.getElementById('fuel-type').value;
  const electricityUsage = Number(document.getElementById('electricity-usage').value);
  const gasUsage = Number(document.getElementById('gas-usage').value);

  // Calculating the carbon footprint
  const carEmissions = distance * carbonEmissions[fuelType];
  const electricityEmissions = electricityUsage * 1.37; // in pounds of CO2 per kilowatt-hour
  const gasEmissions = gasUsage * 12.08; // in pounds of CO2 per cubic foot
  const totalEmissions = (carEmissions + electricityEmissions + gasEmissions) * 52 / 2000; // in tons of CO2 per year

  // Updating the result element with the calculated carbon footprint
  result.textContent = totalEmissions.toFixed(2);
});



const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
