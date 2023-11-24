// Test Cases:

describe('Fahrenheit to Celsius conversion', function() {
    it('converts 32F to 0C', function() {
        var $scope = {};
        var controller = $controller('MainController', { $scope: $scope });
        $scope.likes = 32;
        $scope.incrementLikes($scope.likes);
        expect($scope.obj.cels).toEqual(0);
    });
});

describe('Celsius to Fahrenheit conversion', function() {
    it('converts 0C to 32F', function() {
        var $scope = {};
        var controller = $controller('MainController', { $scope: $scope });
        $scope.number2 = 0;
        $scope.toFehr($scope.number2);
        expect($scope.obj.fehr).toEqual(32);
    });
});

describe('Celsius to Kelvin conversion', function() {
    it('converts 0C to 273.15K', function() {
        var $scope = {};
        var controller = $controller('MainController', { $scope: $scope });
        $scope.number3 = 0;
        $scope.toKelvin($scope.number3);
        expect($scope.obj.kelvin).toBeCloseTo(273.15, 2);
    });
});

describe('Kelvin to Celsius conversion', function() {
    it('converts 273.15K to 0C', function() {
        var $scope = {};
        var controller = $controller('MainController', { $scope: $scope });
        $scope.number4 = 273.15;
        $scope.toCelsius($scope.number4);
        expect($scope.obj.celsius).toEqual(0);
    });
});