<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script src="/js/lottie-player.js"></script>

    @routes
</head>

<body class="bg-gray-200 antialiased text-gray-600 font-sans">
    @inertia
</body>

</html>