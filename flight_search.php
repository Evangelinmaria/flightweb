<?php
// Start the Server: php -S localhost:8000
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include 'dbcon.php';

$source = $_POST['source'];
$destination = $_POST['destination'];
$date = $_POST['date'];

$sql = "SELECT flight_no, flight_name, departure_time, duration, cost 
        FROM flights 
        WHERE source = ? AND destination = ? AND date = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $source, $destination, $date);
$stmt->execute();
$result = $stmt->get_result();

$flights = array();
while ($row = $result->fetch_assoc()) {
    $flights[] = $row;
}

echo json_encode($flights);

$stmt->close();
$conn->close();
?>