var frontCounter = document.querySelector(".counter.frontface");
var backCounter = document.querySelector(".counter.backface");
var front_lessButton = frontCounter.querySelector(".button.less");
var front_plusButton = frontCounter.querySelector(".button.plus");

function initCnt()
{
    frontCounter.querySelector(".counter_display").textContent = 0;
    backCounter.querySelector(".counter_display").textContent = 0;
    frontCounter.style.animation = "none";
    backCounter.style.animation = "none";
}

function decreaseCnt()
{
    frontCounter.querySelector(".counter_display").textContent--;
    backCounter.querySelector(".counter_display").textContent--;
}

function increaseCnt()
{
    frontCounter.querySelector(".counter_display").textContent++;
    backCounter.querySelector(".counter_display").textContent++;
}

initCnt();

front_lessButton.addEventListener("mouseup", function()
{
    if (!this.classList.contains("disabled"))
    {
        frontCounter.style.animation = "decreaseFront 1s steps(120) backwards";
        backCounter.style.animation = "decreaseBack 1s steps(120) backwards";

        decreaseCnt();
        if (frontCounter.querySelector(".counter_display").textContent == 0)
            front_lessButton.classList.add("disabled");
    }
});

front_plusButton.addEventListener("mouseup", function()
{
    frontCounter.style.animation = "increaseFront 1s steps(120) backwards";
    backCounter.style.animation = "increaseBack 1s steps(120) backwards";

    increaseCnt();
    if (frontCounter.querySelector(".counter_display").textContent > 0)
        front_lessButton.classList.remove("disabled");
});

front_lessButton.addEventListener("mousedown", function()
{
    frontCounter.style.animation = "none";
    backCounter.style.animation = "none";
});

front_plusButton.addEventListener("mousedown", function()
{
    frontCounter.style.animation = "none";
    backCounter.style.animation = "none";
});