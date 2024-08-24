const begin1 = document.getElementById('begin1');
const begin2 = document.getElementById('begin2');
const begin3 = document.getElementById('begin3');
const begin4 = document.getElementById('begin4');
const begin5 = document.getElementById('begin5');
const begin6 = document.getElementById('begin6');
const begin7 = document.getElementById('begin7');
const begin8 = document.getElementById('begin8');
const begin9 = document.getElementById('begin9');
const begin10 = document.getElementById('begin10');



begin1.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');

    alert(`a sonining Perimetiri: ${a * 4}`);
})

begin2.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');

    alert(`a sonining kvadrati ${Math.pow(a , 2)}`)
})

begin3.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');
    let b = +prompt('b sonini kiriting:');

    alert(`bu sonlarning yuzasi ${a * b} va Perimetri ${2 * (a + b)}`);
})

begin4.addEventListener('click' , () =>{
    let d = +prompt('diametrni kiriting:');

    alert(`Aylanani uzunligi ${Math.PI * d}`);
})

begin5.addEventListener('click' , () =>{
    let a = +prompt('Kubni yon tomonini kiriting (a):');

    alert(`Kubni xajmi ${Math.pow(a , 3)} va to'la sirti ${6 * Math.pow(a , 2)}`);
})

begin6.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');
    let b = +prompt('b sonini kiriting:');
    let c = +prompt('c sonini kiriting:');

    alert(`Paralelepepidning xajmi ${a * b *c} va to'la sirti ${2 * (a * b + b * c + a * c)}`)
})

begin7.addEventListener('click' , () =>{
    let r = prompt('Doiraning radiusini kiriting (R):');

    alert(`Doiraning uzunligi (L) ${2 * Math.PI * r}ga teng va yuzasi (S) = ${Math.PI * Math.pow(r , 2)}`);
})

begin8.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');
    let b = +prompt('b sonini kiriting:');

    alert(`bu sonlarning o'rta arifmetigi ${(a + b) / 2}ga teng`);
})

begin9.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');
    let b = +prompt('b sonini kiriting:');

    alert(`Bu sonlarning o'rta geometrigi ${Math.sqrt((a * b))}ga teng`);
})

begin10.addEventListener('click' , () =>{
    let a = +prompt('a sonini kiriting:');
    let b = +prompt('b sonini kiriting:');

    alert(`Bularni yigindisi ${a + b}ga teng , kopaytmasi ${a * b}ga teng, a ning kvadrati ${Math.pow(a , 2)}ga teng va b ning kvadrati ${Math.pow(b , 2)}ga teng`)
})