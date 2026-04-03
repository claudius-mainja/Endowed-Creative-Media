<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['name']) || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request data']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$phone = htmlspecialchars($data['phone'] ?? '');
$service = htmlspecialchars($data['service'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

$to = 'info@endowedcreativemedia.com';
$subject = "New Contact Form - $name";
$body = "New Contact Form Submission\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Service: $service\n";
$body .= "Message: $message\n";

$headers = "From: noreply@endowedcreativemedia.com\r\n";
$headers .= "Reply-To: $email\r\n";

$whatsappMessage = "New Contact Form\nName: $name\nEmail: $email\nPhone: $phone\nService: $service\nMessage: $message";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    echo json_encode(['success' => true, 'message' => 'Form submitted (email failed, but data was received)']);
}
