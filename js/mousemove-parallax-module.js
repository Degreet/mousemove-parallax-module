function mousemoveParallax(el, velocity, z) {
  addEventListener("mousemove", e => {
    const x = e.pageX / innerWidth * velocity
    const y = e.pageY / innerHeight * velocity

    el.style.transform = `translate(-${x}px, -${y}px)`
  })
}