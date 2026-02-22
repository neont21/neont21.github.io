export function inview(node: HTMLElement, options = { threshold: 0.05 }) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.dispatchEvent(new CustomEvent('inview'));
            } else {
                node.dispatchEvent(new CustomEvent('outview'));
            }
        });
    }, options);

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}