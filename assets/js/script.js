const adminKod = document.querySelector('.admin__kod'),
    students = document.querySelector('.students'),
    send = document.querySelector('.send'),
    pinkod = document.querySelector('.pinkod');

const test = () => {
    console.log(1);
};

send.addEventListener('click', (e) => {
    e.preventDefault();
    test();


    Admin()
});

function Admin() {
    let kod = 2020;
    if (pinkod == kod) {
        students.classList.add('active');
    } else {
        students.classList.remove('active');
    }
}

const minus = document.querySelectorAll('.minus'),
    plus = document.querySelectorAll('.plus'),
    amount = document.querySelectorAll('.amount');

