var imgList = Array.from( document.querySelectorAll('.item img'));
var lightBoxContainer = document.querySelector('.lightBoxContainer');
var lightBoxItem = document.querySelector('.lightBoxItem');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var closeBtn = document.getElementById('close');
var currentSlideIndex = 0;
for(var i = 0 ; i < imgList.length ; i++)
{
    imgList[i].addEventListener('click', function(e){
        currentSlideIndex = imgList.indexOf(e.target);
        var imgSrc = e.target.getAttribute('src');
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace('d-none' , 'd-flex');
    })
}

function prevSlide()
{
    currentSlideIndex--;
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgList.length -1;
    }
    var imgSrc = imgList[currentSlideIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function nextSlide()
{
    currentSlideIndex++;
    if(currentSlideIndex == imgList.length)
    {
        currentSlideIndex = 0;
    }
    var imgSrc = imgList[currentSlideIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function close()
{
    lightBoxContainer.classList.replace('d-flex' , 'd-none');
}


prevBtn.addEventListener('click' , prevSlide);
nextBtn.addEventListener('click' , nextSlide);
closeBtn.addEventListener('click' , close);

document.body.addEventListener('keydown' , function(e){
    if(e.keyCode == 39)
    {
        nextSlide();
    }
    else if(e.keyCode == 37)
    {
        prevSlide();
    }
    else if(e.keyCode == 27)
    {
        close();
    }
})