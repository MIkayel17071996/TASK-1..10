document.addEventListener("DOMContentLoaded", function () {
    class ImageSlider {
      constructor(imageUrls) {
        this.imageUrls = imageUrls;
        this.imageShownIndex = 0;
        this.canvasElements = document.querySelectorAll(".imageCanvas");
        this.canvasContexts = Array.from(this.canvasElements).map(
          (canvas) => canvas.getContext("2d")
        );
        this.previousButtons = document.querySelectorAll(".previousButton");
        this.nextButtons = document.querySelectorAll(".nextButton");
        this.addEventListeners();
        this.updateImage();
      }
  
      addEventListeners() {
        this.previousButtons.forEach((button) => {
          button.addEventListener("click", () => {
            this.imageShownIndex =
              this.imageShownIndex === 0
                ? this.imageUrls.length - 1
                : this.imageShownIndex - 1;
            this.updateImage();
          });
        });
  
        this.nextButtons.forEach((button) => {
          button.addEventListener("click", () => {
            this.imageShownIndex =
              this.imageShownIndex === this.imageUrls.length - 1
                ? 0
                : this.imageShownIndex + 1;
            this.updateImage();
          });
        });
      }
  
      updateImage() {
        const img = new Image();
        img.src = this.imageUrls[this.imageShownIndex];
        img.onload = () => {
          this.canvasContexts.forEach((context) => {
            context.clearRect(0, 0, 570, 400);
            context.drawImage(img, 0, 0, 570, 400); // Draw the image at (0, 0) to cover the entire canvas
          });
        };
      }
    }
  
    const imageUrls = [
      "https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mercedes_benz_logo1989.png/640px-Mercedes_benz_logo1989.png",
    ];
  
    new ImageSlider(imageUrls);
  });