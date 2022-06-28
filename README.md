# Hangman game

[Deployed Link](https://lshillman.github.io/hangman/)

You've played it before. It's hangman. Click "new game" and press a key to make a guess!

This game will store your wins and losses to localstorage, so you can come back again and again to relive your glory (or shame).

Made for you with love by me and @OnlyMeHere.

## Technologies used:

* HTML
* CSS
* JS

## Code snippet

Turns out you can't do math with stuff in localStorage. So many hours wasted debugging. Here's how we're keeping track of the score:

````javascript
function renderStats() {
    if (localStorage.getItem("wins") != null) {
        wins = localStorage.getItem("wins");
    } else {
        wins = 0;
    }
    if (localStorage.getItem("losses") != null) {
        losses = localStorage.getItem("losses");
    } else {
        losses = 0;
    }
    winEl.innerHTML = wins;
    lossEl.innerHTML = losses;
}
````

## Demo of gameplay


## License

No license is granted to you, express or implied. But if you want to use it, talk to us.