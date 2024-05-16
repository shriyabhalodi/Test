<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "shriyabhalodi1997@gmail.com"; // Replace with your email address
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    // Send email
    mail($to, $subject, $body);

    // Redirect back to the contact page
    header("Location: contact-thank-you.html"); // Replace with your thank you page URL
    exit;
}
?>
