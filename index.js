function estimate() {
    const workers = {
        "Nazarenko Mykhail" : 14,
        "Stepovskiy Dmytro" : 27,
    };
    
    let worker = document.querySelector(".selection");
        worker = worker.options[worker.selectedIndex].value;
    let hours  = document.querySelector("input[type='number']").value.trim();
    let estimate = workers[worker] * hours;
        estimate = document.querySelector(".estimate").value = estimate;
};