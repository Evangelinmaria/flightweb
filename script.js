document.getElementById('searchBtn').addEventListener('click', function () {
  let source = document.getElementById('source').value;
  let destination = document.getElementById('destination').value;
  let date = document.getElementById('date').value;

  let formData = new FormData();
  formData.append('source', source);
  formData.append('destination', destination);
  formData.append('date', date);

  fetch('http://localhost:8000/flight_search.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      let tableBody = document.querySelector('#flightTable tbody');
      tableBody.innerHTML = '';

      data.forEach(flight => {
          let row = document.createElement('tr');

          let flightNoCell = document.createElement('td');
          flightNoCell.textContent = flight.flight_no;
          row.appendChild(flightNoCell);

          let flightNameCell = document.createElement('td');
          flightNameCell.textContent = flight.flight_name;
          row.appendChild(flightNameCell);

          let departureTimeCell = document.createElement('td');
          departureTimeCell.textContent = flight.departure_time;
          row.appendChild(departureTimeCell);

          let durationCell = document.createElement('td');
          durationCell.textContent = flight.duration;
          row.appendChild(durationCell);

          let costCell = document.createElement('td');
          costCell.textContent = flight.cost;
          row.appendChild(costCell);

          tableBody.appendChild(row);
      });
  });
});

// create database flights;
// USE flights;
// CREATE TABLE flights (source VARCHAR(20), destination VARCHAR(20), date DATE, flight_no INT, flight_name VARCHAR(20), departure_time TIME, duration TIME, cost INT);
// INSERT INTO flights (source, destination, date, flight_no, flight_name, departure_time, duration, cost)
// VALUES 
//     ('New York', 'Los Angeles', '2024-09-01', 101, 'SkyHigh', '08:00:00', '05:30:00', 350),
//     ('Chicago', 'Miami', '2024-09-01', 102, 'Sunrise', '09:00:00', '03:45:00', 250),
//     ('Dallas', 'Seattle', '2024-09-02', 103, 'StarJet', '10:15:00', '04:20:00', 300),
//     ('San Francisco', 'New York', '2024-09-03', 104, 'CoastLine', '07:00:00', '06:00:00', 400),
//     ('Miami', 'Boston', '2024-09-03', 105, 'OceanFly', '11:30:00', '04:15:00', 280),
//     ('Los Angeles', 'Chicago', '2024-09-04', 106, 'WindyCity', '12:45:00', '04:00:00', 330),
//     ('Houston', 'Denver', '2024-09-05', 107, 'MountainAir', '14:00:00', '02:30:00', 220),
//     ('Boston', 'San Francisco', '2024-09-06', 108, 'GoldenGate', '06:45:00', '06:45:00', 450),
//     ('Atlanta', 'Las Vegas', '2024-09-06', 109, 'DesertEagle', '13:15:00', '04:45:00', 370),
//     ('Seattle', 'Dallas', '2024-09-07', 110, 'LoneStar', '15:30:00', '04:30:00', 310),
//     ('Denver', 'Houston', '2024-09-08', 111, 'RockyFlyer', '09:00:00', '02:30:00', 230),
//     ('Las Vegas', 'Atlanta', '2024-09-09', 112, 'SouthernComfort', '16:00:00', '04:45:00', 360),
//     ('San Diego', 'New York', '2024-09-10', 113, 'BigApple', '17:00:00', '05:15:00', 420),
//     ('Orlando', 'Chicago', '2024-09-11', 114, 'MidwestExpress', '10:00:00', '04:00:00', 290),
//     ('Phoenix', 'Los Angeles', '2024-09-12', 115, 'DesertSky', '08:30:00', '01:30:00', 180);