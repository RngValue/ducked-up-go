var a = "terraria minecraft of worlds"




for (var i = 0; i < localStorage.length; i++) {
    if (a.includes(localStorage.key(i))) {
        console.log(localStorage.getItem(localStorage.key(i)))
    }
}