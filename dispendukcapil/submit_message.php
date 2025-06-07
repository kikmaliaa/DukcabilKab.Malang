<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Semua kolom harus diisi.']);
        exit;
    }

    echo json_encode(['success' => true, 'message' => 'Pesan berhasil diterima.']);

} else {
    echo json_encode(['success' => false, 'message' => 'Metode request tidak valid.']);
}
?>