// place files you want to import through the `$lib` alias in this folder.
// scrollReveal is a Svelte action that applies a scroll reveal animation to any element it's used on. It uses the Intersection Observer API to detect when the element enters the viewport and applies a fade-in and slide-up animation.
// export function scrollReveal(
// 	node: HTMLElement,
// 	options = {
// 		threshold: 0.15,
// 		delay: 0
// 	}
// ) {
// 	node.style.opacity = '0';
// 	node.style.transform = 'translateY(30px)';
// 	node.style.transition = `opacity 0.6s ease ${options.delay}ms, transform 0.6s ease ${options.delay}ms`;

// 	const observer = new IntersectionObserver(
// 		(entries) => {
// 			entries.forEach((entry) => {
// 				if (entry.isIntersecting) {
// 					node.style.opacity = '1';
// 					node.style.transform = 'translateY(0)';
// 					observer.unobserve(node); // only animate once
// 				}
// 			});
// 		},
// 		{ threshold: options.threshold }
// 	);

// 	observer.observe(node);

// 	return {
// 		destroy() {
// 			observer.disconnect();
// 		}
// 	};
// }

export function fadeIn(
	node: HTMLElement,
	options = {
		delay: 0,
		duration: 800,
		direction: 'up' as 'up' | 'left' | 'right' | 'none'
	}
) {
	const transforms = {
		up: 'translateY(30px)',
		left: 'translateX(-40px)',
		right: 'translateX(40px)',
		none: 'translate(0)'
	};

	node.style.opacity = '0';
	node.style.transform = transforms[options.direction];
	node.style.transition = `opacity ${options.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${options.delay}ms, transform ${options.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${options.delay}ms`;

	// Small timeout so the browser registers the initial state first
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			node.style.opacity = '1';
			node.style.transform = 'translate(0)';
		});
	});

	return {
		destroy() {}
	};
}

export function scrollReveal(
	node: HTMLElement,
	options = {
		threshold: 0.15,
		delay: 0,
		duration: 600,
		direction: 'up' as 'up' | 'left' | 'right'
	}
) {
	const transforms = {
		up: 'translateY(40px)',
		left: 'translateX(-40px)',
		right: 'translateX(40px)'
	};

	node.style.opacity = '0';
	node.style.transform = transforms[options.direction ?? 'up'];
	node.style.transition = `opacity ${options.duration ?? 600}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${options.delay ?? 0}ms, transform ${options.duration ?? 600}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${options.delay ?? 0}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translate(0)';
					observer.unobserve(node); // animate once only
				}
			});
		},
		{ threshold: options.threshold ?? 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
