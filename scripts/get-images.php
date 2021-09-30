const files =
<?php
$out = array();
foreach (glob('../assets/elements/*.png') as $filename) {
    $out[] = "assets/elements/" . basename($filename);
}
echo json_encode($out);
?>