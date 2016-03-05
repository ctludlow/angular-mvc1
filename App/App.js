var appMainModule = angular.module('appMain', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', { templateUrl: '/Templates/Firings.html', controller: 'firingsViewModel' });

    });

appMainModule.controller('indexViewModel', function ($scope, $http, $location, $window) {

    $scope.headingCaption = "Telemetry Website";
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };

    $scope.people = [
        { FirstName: 'John', LastName: 'Doe' },
        { FirstName: 'Alice', LastName: 'Peters' },
        { FirstName: 'Gus', LastName: 'Emery' },
        { FirstName: 'Larry', LastName: 'Zonka' }
    ];

    $scope.selectedPerson;

    //$scope.showPerson = function (person) {
    //    //alert('You selected ' + person.FirstName + ' ' + person.LastName);
    //    $scope.selectedPerson = person;
    //    $scope.toggleModal();
    //    //personDetailController.person = person;
    //    //alert(personDetailController.person.FirstName);
    //    //$window.open('PersonDetail.html');
    //};
});

appMainModule.controller('firingsViewModel', function ($scope, $http, $location, $window, $uibModal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];
    $scope.animationsEnabled = true;
    $scope.headingCaption = "All Firings";
    
    $scope.firings = [
        { FiringName: 'firing 1', VaultNum: '123' },
        { FiringName: 'firing 2', VaultNum: '1234' },
        { FiringName: 'firing 3', VaultNum: '12345' }
    ];
    $scope.selectedFiring;

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };



    $scope.showFiring = function (firing) {
        $scope.selectedFiring = firing;
        
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 1,
            //resolve: {
            //    items: function () {
            //        return $scope.items;
            //    }
            resolve: {
                items: function () {
                    return $scope.selectedFiring;
                }

            }
        });
        //$scope.toggleModal();
    };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

appMainModule.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
