import "../public/styles/style.scss";

class Header{
  openMenu = document.getElementById("menu-mobile")?.addEventListener("click", this.openMenuMobile.bind(this));
  closeMenu = document.getElementById("close-menu")?.addEventListener("click", this.closeMenuMobile.bind(this));
  linksMobile = document.getElementById("wrapper-links");

  openMenuMobile(){
    this.linksMobile!.classList.add("active");
  };

  closeMenuMobile(){
    this.linksMobile!.classList.remove("active");
  };
};

class ShoppingCard{
  shoppingCard = document.getElementById("shopping-card");
  iconCarShop = document.getElementById("icon-car-shop")?.addEventListener("click", this.stateShoppingCard.bind(this));

  static listProducts:{id:number,count:number}[] = [];
  
  stateShoppingCard(){
    const stateShoppingCard = this.shoppingCard?.classList;
    stateShoppingCard?.toggle("active")
  };

  injectItemShopCard(item:{}, number:number){
    console
  }

  static generateItemShop(){
    const newItem  = 
      `
      <div class="product-card">
        <div class="thumb-card"></div>
        <div class="description-card">
          <p>Autumn Limited Edition...</p>
          <div class="price">
            <p>$125.00 x 3</p><b>$375,00</b>
          </div>
        </div>
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
      </div>
      `;
  }
}

class Main{
  images = [
    "../assets/imagens/image-product-1.jpg", 
    "../assets/imagens/image-product-2.jpg", 
    "../assets/imagens/image-product-3.jpg", 
    "../assets/imagens/image-product-4.jpg"
  ];

  //mobile handler
  imgProdListener = document.getElementById("img-prod")?.addEventListener("click", this.openMaxProd.bind(this));
  arrowRight = document.getElementById("arrow-right")?.addEventListener("click", () => {this.toggleImageMob("next")});
  arrowLeft = document.getElementById("arrow-left")?.addEventListener("click", () => {this.toggleImageMob("prev")});
  numHandlerImgMob:number = 0;
  
  //handler product main 
  imgProduct = document.getElementById("img-prod");

  thumbsMain = [
    document.getElementById("thumb-main-1"),
    document.getElementById("thumb-main-2"),
    document.getElementById("thumb-main-3"),
    document.getElementById("thumb-main-4")
  ];
  thumbsMainListenners = this.thumbsMain.map((element, index) => {
    element?.addEventListener("click", () => {
      this.toggleImgMain(index);
    })
  })
  
  //Maximized Desktop Images
  maximizedProduct = document.getElementById("maximized-product");
  mainImgMax = document.getElementById("main-img-max");

  thumbsMaximized = [
    document.getElementById("thumb-max-1"), 
    document.getElementById("thumb-max-2"), 
    document.getElementById("thumb-max-3"), 
    document.getElementById("thumb-max-4")
  ];
  thumbsMaximizedListenners = this.thumbsMaximized.map((element, index) => {
    element?.addEventListener("click", () => {this.modifImgMainMax(index)});
  })

  arrowLeftMax = document.getElementById("arrow-left-max")?.addEventListener("click", () => {this.imgMainBaseArrow("Left")});
  arrowRightMax = document.getElementById("arrow-right-max")?.addEventListener("click", () => {this.imgMainBaseArrow("Right")});
  closeMaxProduct = document.getElementById("close-window-maxprod")?.addEventListener("click", this.closeMaxProd.bind(this));

  imgChangeNumberMax = 0;
  
  //Counter Items
  counter:number = 0;
  counterDOM = document.getElementById("counter");
  iconPlus = document.getElementById("icon-plus")?.addEventListener("click", this.incrementQuantItem.bind(this));
  iconMinus = document.getElementById("icon-minus")?.addEventListener("click", this.decrementQuantItem.bind(this));

  handlerImage(numberImage:number){
    this.imgProduct!.style.backgroundImage = `url(${this.images[numberImage]})`;
    this.imgProduct!.style.backgroundPosition = "center 0";
  }

  toggleImageMob(mode:string){
    if(mode === "next"){
      if(this.numHandlerImgMob < 3){
        this.numHandlerImgMob++;
        this.handlerImage(this.numHandlerImgMob);
      }
      else{
        this.numHandlerImgMob = 0;
        this.handlerImage(this.numHandlerImgMob);
      }
    }
    else{
      if(this.numHandlerImgMob === 0){
        this.numHandlerImgMob = 3;
        this.handlerImage(this.numHandlerImgMob);
      }
      else{
        this.numHandlerImgMob--;
        this.handlerImage(this.numHandlerImgMob);
      }
    }
  }

  incrementQuantItem(){
    this.counter++;
    this.counterDOM!.innerText = `${this.counter}`;
  }
  
  decrementQuantItem(){
    this.counter--;
    if(this.counter < 0){
      this.counter = 0
    }
    this.counterDOM!.innerText = `${this.counter}`;
  }

  openMaxProd(){
    this.maximizedProduct?.classList.add("active");
  }

  closeMaxProd(){
    this.maximizedProduct?.classList.remove("active");
  }

  modifImgMainMax(number: number){
    this.imgChangeNumberMax = number;
    this.mainImgMax!.style.backgroundImage = `url(${this.images[number]})`;
    this.mainImgMax!.style.backgroundSize = "cover";
  }

  imgMainBaseArrow(position:String){
    if(position === "Left"){
      if(this.imgChangeNumberMax === 0){
        this.imgChangeNumberMax = 3;
        this.handlerImageBaseArrow(this.imgChangeNumberMax)
      }
      else{
        this.imgChangeNumberMax--;
        this.handlerImageBaseArrow(this.imgChangeNumberMax);
      }
    }
    else{
      if(this.imgChangeNumberMax >= 3){
        this.handlerImageBaseArrow(this.imgChangeNumberMax = 0)
      }
      else{
        this.imgChangeNumberMax++
        this.handlerImageBaseArrow(this.imgChangeNumberMax);
      }
    }
  }

  handlerImageBaseArrow(num:number){
    this.mainImgMax!.style.backgroundImage = `url(${this.images[num]})`
  }

  toggleImgMain(num:number){
    for(let i = 0; i < this.thumbsMain.length; i++){
      this.thumbsMain[i]?.classList.remove("active");
    }
    this.handlerImage(num);
    this.thumbsMain[num]?.classList.add("active");
  }

  //shopping

  btnAddShoppinngCard = document.getElementById("btn-add-shoppinng-card")?.addEventListener("click", this.addListProducts.bind(this));
  addListProducts(){
    const productItem = {
      id: 1,
      description: "salve",
      price: 302,
      discont: 10,
      count: this.counter,
    }
    const filter = ShoppingCard.listProducts.filter((element) => {return element.id === productItem.id});
    const index = ShoppingCard.listProducts.findIndex((element) => {return element.id === productItem.id});
    if(index !== -1){
      filter[0].count = this.counter
      ShoppingCard.listProducts.splice(index,1,filter[0]);
      // console.log(ShoppingCard.listProducts)
      return;
    }
    ShoppingCard.listProducts.push(productItem);
    // console.log(ShoppingCard.listProducts)
  }
}
class App{
  static init(){
    const header = new Header();
    const shoppingCard = new ShoppingCard();
    const main = new Main();
  };
}

App.init();