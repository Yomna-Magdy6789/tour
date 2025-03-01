//login

//panel
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        const accordion = document.getElementById('accordionExample');
        const openCollapse = accordion.querySelector('.collapse.show');
        if (openCollapse && openCollapse !== this.nextElementSibling) {
            openCollapse.classList.remove('show');
        }
    });
});
//copy
document.getElementById('copyButton').addEventListener('click', function () {

    var copyText = document.getElementById('pressHereLink').value;
    navigator.clipboard.writeText(copyText).then(function () {
        alert("text copied");
    }, function (err) {
        console.error('Failed to copy: ', err);
    });
});


document.getElementById('copyButton1').addEventListener('click', function () {
    var copyText = document.getElementById('pressHereLink').value;
    navigator.clipboard.writeText(copyText).then(function () {
        alert("text copied ");
    }, function (err) {
        console.error('Failed to copy: ', err);
    });
});
document.getElementById('copyButton2').addEventListener('click', function () {

    var copyText = document.getElementById('pressHereLink').value;
    navigator.clipboard.writeText(copyText).then(function () {
        alert("text copied");
    }, function (err) {
        console.error('Failed to copy: ', err);
    });
});

