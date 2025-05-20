
document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll('.photo');
    // selects all elements with the class 'photo'

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // gets width and height of the viewport, which is the visible area of the browser user can see

    //using the constant we made earlier=> photos, we iterate over all them, each of them
    photos.forEach(photo => {

        //gets width and height of this individual photo first
        const photoWidth = photo.offsetWidth;
        const photoHeight = photo.offsetHeight;

        //to keep the photo within the viewport,which is the area on the screen the user can see, we calculate these values
        const centerX = viewportWidth/2 -photoWidth/2;
        const centerY = viewportHeight/2 - photoHeight/2;

        const offsetRange = 60;//specifies my area of the pics dump in the middle
        //using allowed range(max value per position) from up there, we derive the possible random positions for the photo
        const randomLeft = centerX + (Math.random() - 0.5) * offsetRange;
        const randomTop = centerX + (Math.random() - 0.5) * offsetRange;

        photo.style.position = 'absolute'; //locks in the photo to whatever position it is given

        photo.style.left = `${randomLeft}px`;
        photo.style.top = `${randomTop}px`; //these will then apply the randomly generated positions to the left and top positions of the pic
        photo.classList.add('show');
        
        });
    });