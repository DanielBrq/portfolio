import { gsap } from "gsap";

export async function useCursorFollow() {
    gsap.set(".cursor-follow", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".cursor-follow", "x", { duration: 0.15, ease: "power3" });
    let yTo = gsap.quickTo(".cursor-follow", "y", { duration: 0.15, ease: "power3" });

    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    });
}