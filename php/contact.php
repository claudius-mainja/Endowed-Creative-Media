<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    $data = $_POST;
}

$name = sanitize($data['name'] ?? '');
$email = sanitize($data['email'] ?? '');
$phone = sanitize($data['phone'] ?? '');
$service = sanitize($data['service'] ?? 'General');
$message = sanitize($data['message'] ?? '');
$eventDate = sanitize($data['eventDate'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
    exit;
}

$to = 'info@endowedcreativemedia.com';
$subject = "New Quote Request - $service";

$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1B4D3E, #2E5A88); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1B4D3E; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Quote Request</h1>
            <p>Endowed Creative Media</p>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Service Type:</span> $service
            </div>
            <div class='field'>
                <span class='label'>Name:</span> $name
            </div>
            <div class='field'>
                <span class='label'>Email:</span> $email
            </div>
            <div class='field'>
                <span class='label'>Phone:</span> $phone
            </div>
            " . ($eventDate ? "<div class='field'><span class='label'>Event Date:</span> $eventDate</div>" : "") . "
            <div class='field'>
                <span class='label'>Message:</span><br>
                " . nl2br($message) . "
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the Endowed Creative Media website quote form.</p>
            <p>&copy; " . date('Y') . " Endowed Creative Media - Harare, Zimbabwe</p>
        </div>
    </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@endowedcreativemedia.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $emailBody, $headers)) {
    $autoReplySubject = "Thank you for your inquiry - Endowed Creative Media";
    $autoReplyBody = "
    <html>
    <body>
        <div style='max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;'>
            <div style='background: linear-gradient(135deg, #1B4D3E, #2E5A88); color: white; padding: 20px; text-align: center;'>
                <h1>Thank You!</h1>
            </div>
            <div style='background: #f9f9f9; padding: 20px;'>
                <p>Dear $name,</p>
                <p>Thank you for your interest in Endowed Creative Media. We have received your inquiry and will get back to you within 24 hours.</p>
                <p>In the meantime, feel free to browse our portfolio or contact us directly on WhatsApp at +263 77 3830 904.</p>
                <p>Best regards,<br>The Endowed Creative Media Team</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $autoReplyHeaders = "MIME-Version: 1.0\r\n";
    $autoReplyHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $autoReplyHeaders .= "From: Endowed Creative Media <noreply@endowedcreativemedia.com>\r\n";
    
    mail($email, $autoReplySubject, $autoReplyBody, $autoReplyHeaders);
    
    echo json_encode(['success' => true, 'message' => 'Quote request sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again or contact us directly.']);
}

function sanitize($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}
