const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); //to prevent auto submit and refresh of pg
  const ht = parseInt(document.querySelector('#height').value);
  const wt = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (ht === '' || isNaN(ht) || ht < 0) {
    res.innerHTML = `Please add a valid height ${ht}`;
  } else if (wt === '' || isNaN(wt) || wt < 0) {
    res.innerHTML = `Please add a valid weight ${ht}`;
  } else {
    const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
    res.innerHTML = `<span>${bmi}</span>`;
  }
});
