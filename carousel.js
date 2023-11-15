function carousel() {
  return {
    currentIndex: 0,
    init() {
      this.$nextTick(() => {
        this.showSlide(this.currentIndex);
      });
    },
    showSlide(index) {
      this.$refs.container.style.transform = `translateX(-${index * 100}%)`;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.$refs.container.children.length;
      this.showSlide(this.currentIndex);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.$refs.container.children.length) % this.$refs.container.children.length;
      this.showSlide(this.currentIndex);
    },
  };
}