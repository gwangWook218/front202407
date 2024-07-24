var fname = document.getElementById('fname');

function upperCase() {
    this.value = this.value.toUpperCase();
}

fname.oninput = upperCase;