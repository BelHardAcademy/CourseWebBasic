function init() {
    calculateAge();
    document.getElementById('currentYear').innerText = new Date().getFullYear();

    document.getElementById('leftArrow').onclick = function() {
        var container = document.getElementById('projectContainer');
        var first = container.children[0];
        container.removeChild(first);
        container.appendChild(first);
    }

    document.getElementById('rightArrow').onclick = function() {
        var container = document.getElementById('projectContainer');
        var last = container.children[container.children.length - 1];
        container.removeChild(last);
        container.insertBefore(last, container.children[0]);
    }

    document.getElementById('contactForm').onsubmit = function (e) {
        e.preventDefault();
        alert(`${document.getElementById('name').value}, спасибо за сообщение!`);
        document.getElementById('name').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }    
    
    function calculateAge() {
        var currentDate = new Date();
        var age = currentDate.getFullYear() - 1983;
        if (currentDate.getMonth() < 5 || (currentDate.getMonth() === 5 && currentDate.getDay() < 16)){
            age--;
        }
    
        var ageSuffix = 'года';
        if ((age > 5 && age <= 20) || age % 10 >= 5 || age % 10 === 0) {
            ageSuffix = 'лет';
        } else  if (age % 10 === 1){
            ageSuffix = 'год';
        }
    
        var ageContainer = document.getElementById('age');
        ageContainer.innerText = `(${age} ${ageSuffix})`;
    }
}

init();