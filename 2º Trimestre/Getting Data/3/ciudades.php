<?php
$ciudades = ['Amsterdam', 'Berlin', 'Copenhagen', 'Dublin', 'Edinburgh', 'Florence', 'Geneva',
    'Helsinki', 'Istanbul', 'Jerusalem', 'Kyoto', 'Lisbon', 'Madrid', 'Naples', 'Oslo', 'Paris',
    'Quebec City', 'Rome', 'Stockholm', 'Tokyo', 'Utrecht', 'Vienna', 'Warsaw', 'Xiamen', 'York',
    'Zurich'];

$letra = strtoupper($_GET['letra']);

$sugerencias = array_filter($ciudades, function($ciudad) use ($letra) {
    return strpos($ciudad, $letra) === 0;
});

echo json_encode(array_values($sugerencias));
?>