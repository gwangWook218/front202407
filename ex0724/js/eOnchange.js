var fname = document.getElementById('fname');

function lowerCase() {
    this.value = this.value.toLowerCase();
}

fname.onchange = lowerCase;