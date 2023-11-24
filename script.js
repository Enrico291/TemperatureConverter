var MainController = function($scope) {

    var obj = { hello: null, cels: null, hello2: null, fehr: null, hello3: null, kelvin: null, hello4: null, celsius: null }

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

    var incrementLikes = function(likes) {

        obj.hello = roundToTwo(($scope.likes - 32) * (5 / 9));
        obj.cels = "Degrees Celsius";
    };

    var toFehr = function(number2) {

        obj.hello2 = roundToTwo(($scope.number2 * (9 / 5) + 32));
        obj.fehr = "Degrees Fahrenheit"

    }

    var toKelvin = function(number3) {

        obj.hello3 = roundToTwo(($scope.number3 + 273.15));
        obj.kelvin = "Degrees Kelvin"

    }

    var toCelsius = function(number4) {

        obj.hello4 = roundToTwo(($scope.number4 - 273.15));
        obj.celsius = "Degrees Celcius"

    }



    $scope.toFehr = toFehr;
    $scope.incrementLikes = incrementLikes;
    $scope.toKelvin = toKelvin;
    $scope.toCelsius = toCelsius;
    $scope.obj = obj;

};