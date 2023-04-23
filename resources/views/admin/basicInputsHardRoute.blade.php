{{-- This is an example file to demo how to display custom components within the AdminKit layout SPA. --}}
{{-- You must inherit from the layout SPA, and must define a renderLaravel() JS function. --}}
{{-- The function returns an array. The first element is the react component you wish to display, and the second is --}}
{{-- the json object containing the parameters. The react component must be registered in tsx/laravel.tsx --}}

@extends('layouts.adminkit')

@section('js')
    <script>

        /**
         * Check that the component is listed in the registry in laravel.tsx
         *
         * should return an array with 2 params:
         *   1. The component
         *   3. Component parameters to initialize
         */
        function renderLaravel() {
            return ['FormsBasicInputs', {}];
        }
    </script>
@endsection
