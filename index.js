const before = document.getElementById('before');
const after = document.getElementById('after');
const rating = document.getElementById('rating');

var ratingStar = 0;

function getRating(a){
    ratingStar = a; 
    console.log(ratingStar);
};

function nextStep(){
    if(ratingStar == 0){
        alert("Please Select 1 To 5");
    }
    else{before.classList.add('hidden');
    after.classList.remove('hidden');
    rating.textContent = ratingStar}
};