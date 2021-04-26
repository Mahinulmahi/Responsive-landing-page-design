window.addEventListener("scroll", function (event) {
    var s = this.scrollY;
    console.log(s);
    if(s>1632){
    	$('.nav').css({
    		"background" : "red"
    	});
    }
    else{
    	$('.nav').css({
    		"background" : "blue"
    	});
    }
    
});

var project = setInterval(projectDone, 20)
        var clients = setInterval(happyClients, 2)
        var coffee = setInterval(cupsCoffee, 80)
        var new1 = setInterval(new11, 12)
        var new2 = setInterval(new12, 39)
        let count1 = 1;
        let count2 = 1;
        let count3 = 1;
        let count4 = 1;
        let count5 = 1;

        function projectDone() {
            count1++
            document.querySelector("#number1").innerHTML = count1
            if (count1 == 42) {
                clearInterval(project)
            }
        }

        function happyClients() {
            count2++
            document.querySelector("#number2").innerHTML = count2
            if (count2 == 123) {
                clearInterval(clients)
            }
        }

        function cupsCoffee() {
            count3++
            document.querySelector("#number3").innerHTML = count3
            if (count3 == 15) {
                clearInterval(coffee)
            }
        }

        function new11() {
            count4++
            document.querySelector("#number4").innerHTML = count4
            if (count4 == 99) {
                clearInterval(new1)
            }
        }

        function new12() {
            count5++
            document.querySelector("#number5").innerHTML = count5
            if (count5 == 24) {
                clearInterval(new2)
            }
        }