<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>BizBrainers</title>
        <link rel="icon" href="{{asset('images/biz.png')}}" sizes="192x192" />
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="manifest" href="{{asset('manifest.json')}}">
    </head>
    <body>

    <div id="app">
        <app></app>
    </div>
    <script src="{{mix('js/app.js')}}"></script>
    </body>
</html>
