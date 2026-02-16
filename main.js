function toggleText() {
  const helloText = document.getElementById('helloText');
  const thanksText = document.getElementById('thanksText');

  if (helloText.style.display === 'none') {
    helloText.style.display = 'block';
    thanksText.style.display = 'none';
  } else {
    helloText.style.display = 'none';
    thanksText.style.display = 'block';
  }
}
