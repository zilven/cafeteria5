@extends('layouts.default')
@section('content')
    <h1>Crear pedido</h1>
    
    <form class="form">
        <div class="form-group">
            <div class="row">
                <div class="col-xs-1">
                    <input class="form-control" type="text" placeholder="#">
                </div>
                <div class="col-xs-10">
                    <select class="form-control">
                    @foreach($comidas as $comida)
                        <option value="{{$comida->id}}">{{$comida->nombre}}</option>
                    @endforeach
                    </select>
                </div>
                <div class="col-xs-1">
                    <button class="btn btn-primary" type="button">+</button>
                </div>
            <select class="form-control"></select>
            <button class="btn btn-primary">+<button>
            </div>
@endsection

@section('customstyles')
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
@endsection

@section('customscripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
@endsection