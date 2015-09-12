var app = angular.module('prusanto', ['ui.bootstrap']);
app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 3000;
    var imgRoot = 'img/producao/';
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({image: imgRoot + 'IMG_5185.JPG'});
        slides.push({image: imgRoot + 'IMG_5191.JPG'});
        slides.push({image: imgRoot + 'IMG_5230.JPG'});
        slides.push({image: imgRoot + 'IMG_5231.JPG'});
        slides.push({image: imgRoot + 'IMG_5239.JPG'});
        // slides.push({image: imgRoot + 'IMG_5317.JPG'});
        slides.push({image: imgRoot + 'IMG_5329.JPG'});
    };
    //for (var i=0; i<4; i++) {
    $scope.addSlide();
    //}
});
app.controller('SendMailCtrl', function ($scope, $http, $httpParamSerializer) {
    //$scope.message = 3000;


    $scope.sendMail = function () {

        var mailJSON = {
            "key": "AvyuE80-1HLaJngw8zs4VA",
            "message": {
                "html": "" + $scope.message + "<BR><BR> De:" + $scope.name + "<BR> Tel:" + $scope.phone + "<BR> Email: " + $scope.email,
                "text": "" + $scope.message + "/\n/\n De: " + $scope.name + "/\n Tel:" + $scope.phone + "/\n Email: " + $scope.email,
                "subject": "CONTATO - PRUSANTO.COM.BR",
                "from_email": $scope.email,
                "from_name": $scope.name,
                "to": [
                    {
                        "email": "rodrigojorge@gmail.com",
                        "name": "Rodrigo",
                        "type": "to"
                    }
                    ,
                    {
                        "email": "cervejariaprusanto@gmail.com",
                        "name": "PruSanto",
                        "type": "to"
                    }
                ],
                "important": true,
                "track_opens": null,
                "track_clicks": null,
                "auto_text": null,
                "auto_html": null,
                "inline_css": null,
                "url_strip_qs": null,
                "preserve_recipients": null,
                "view_content_link": null,
                "tracking_domain": null,
                "signing_domain": null,
                "return_path_domain": null
            },
            "async": false,
            "ip_pool": "Main Pool"
        };
        var apiURL = "https://mandrillapp.com/api/1.0/messages/send.json";
        $http.post(apiURL, mailJSON).
                success(function (data, status, headers, config) {
                    alert('O seu e-mail foi enviado com sucesso. \n\nObrigado pelo contato!\n\nResponderemos o mais breve possível!!!');
                    $scope.form = {};
                    console.log('successful email send.');
                    console.log('status: ' + status);
                    console.log('data: ' + data);
                    console.log('headers: ' + headers);
                    console.log('config: ' + config);
                }).error(function (data, status, headers, config) {
            console.log('error sending email.');
            console.log('status: ' + status);
        });


    };
});



