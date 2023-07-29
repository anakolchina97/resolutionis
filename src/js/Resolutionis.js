class Resolutionis {
  constructor() {
    this.windowW = window.innerWidth;
    this.windowH = window.innerHeight;
    this.w = document.querySelector("[data-w]");
    this.h = document.querySelector("[data-h]");
    this.init();
    window.addEventListener("resize", () => {
      this.windowW = window.innerWidth;
      this.windowH = window.innerHeight;
      this.init();
    });
  }
  init() {
    this.w.innerHTML = this.windowW;
    this.h.innerHTML = this.windowH;
  }
}

export default new Resolutionis();
