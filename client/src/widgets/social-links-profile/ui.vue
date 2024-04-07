<script setup lang="ts">
	import gsap from "gsap";
	import { ref } from "vue";

	import imageMobile from "./assets/profile-mobile.jpg";
	import imageTablet from "./assets/profile-tablet.jpg";
	import imageDesktop from "./assets/profile-tablet.jpg";

	const flairRef = ref(null);
	const textRef = ref(null);
	const linkRef = ref(null);

	const handleMouseMove = (event: any) => {
		const { target, offsetX, offsetY } = event;

		const targetWidth = target.getBoundingClientRect().width;

		gsap.to(flairRef.value, {
			translateX: offsetX,
			translateY: offsetY,
			width: targetWidth * 1.5 + "px",
			height: targetWidth * 1.5 + "px",
			duration: 0.25,
			ease: "power1"
		});
	};

	const handleMouseEnter = (event: any) => {
		const { offsetX, offsetY } = event;

		gsap.to(textRef.value, {
			color: "#333",
			duration: 0.25,
			ease: "power1"
		});

		gsap.set(flairRef.value, {
			width: "0px",
			height: "0px",
			translateX: offsetX,
			translateY: offsetY,
			opacity: 1
		});

		window.addEventListener("mousemove", handleMouseMove);
	};

	const handleMouseLeave = () => {
		gsap.to(textRef.value, {
			color: "#fff",
			duration: 0.25,
			ease: "power1"
		});

		gsap.to(flairRef.value, {
			width: "0px",
			height: "0px",
			duration: 0.25,
			ease: "power1"
		});

		window.removeEventListener("mousemove", handleMouseMove);
	};

	const handleTouchStart = () => {
		gsap.to(textRef.value, {
			color: "#333",
			duration: 0.25,
			ease: "power1"
		});

		gsap.to(linkRef.value, {
			backgroundColor: "#c4f82a",
			duration: 0.25,
			ease: "power1"
		});
	};

	const handleTouchEnd = () => {
		gsap.to(textRef.value, {
			color: "#fff",
			duration: 0.25,
			ease: "power1"
		});

		gsap.to(linkRef.value, {
			backgroundColor: "#333333",
			duration: 0.25,
			ease: "power1"
		});
	};
</script>

<template>
	<article class="social-links-profile">
		<picture>
			<source media="(min-width: 375px)" :srcset="imageMobile" />
			<source media="(min-width: 768px)" :srcset="imageTablet" />
			<source media="(min-width: 1024px)" :srcset="imageDesktop" />
			<img class="social-links-profile__user-image" :src="imageDesktop" alt="User X profile" />
		</picture>
		<h2 class="social-links-profile__user-full-name">Jessica Randall</h2>
		<p class="social-links-profile__user-location">London, United Kingdom</p>
		<p class="social-links-profile__user-info">"Front-end developer and avid reader."</p>
		<ul class="social-links-profile__user-link-list user-links-list">
			<li class="user-links-list__item">
				<a class="user-links-list__item-link" href="#" target="_blank">
					<span class="user-links-list__item-link-name">GitHub</span>
				</a>
			</li>
			<li class="user-links-list__item">
				<a class="user-links-list__item-link" href="#" target="_blank">
					<span class="user-links-list__item-link-name">Frontend Mentor</span>
				</a>
			</li>
			<li class="user-links-list__item">
				<a
					class="user-links-list__item-link"
					href="#"
					target="_blank"
					ref="linkRef"
					type="button"
					@mouseenter="handleMouseEnter"
					@mouseleave="handleMouseLeave"
					@touchstart="handleTouchStart"
					@touchend="handleTouchEnd"
				>
					<span ref="textRef" class="user-links-list__item-link-name">LinkedIn</span>
					<div ref="flairRef" class="user-links-list__item-link-flair"></div>
				</a>
			</li>
			<li class="user-links-list__item">
				<a class="user-links-list__item-link" href="#" target="_blank">
					<span class="user-links-list__item-link-name">Twitter</span>
				</a>
			</li>
			<li class="user-links-list__item">
				<a class="user-links-list__item-link" href="#" target="_blank">
					<span class="user-links-list__item-link-name">Instagram</span>
				</a>
			</li>
		</ul>
	</article>
</template>

<style>
	.social-links-profile {
		max-width: 32.7rem;
		width: 100%;
		padding: 2.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--dark-grey);
		border-radius: 1.2rem;
	}

	.social-links-profile__user-image {
		width: 8.8rem;
		height: 8.8rem;
		border-radius: 50%;
		margin-bottom: 2.4rem;
		object-fit: cover;
	}

	.social-links-profile__user-full-name {
		font-family: var(--font-family);
		font-weight: 600;
		font-size: 2.4rem;
		color: var(--white);
		margin: 0 0 0.4rem;
		text-align: center;
	}

	.social-links-profile__user-location {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--neon-green);
		margin: 0 0 2.4rem;
		text-align: center;
	}

	.social-links-profile__user-info {
		margin: 0 0 2.4rem;
		font-family: var(--font-family);
		font-weight: 400;
		font-size: 1.4rem;
		color: var(--white);
		text-align: center;
	}

	.social-links-profile__user-link-list {
		list-style: none;
		margin: 0;
	}

	.user-links-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1.6rem;
		width: 100%;
		padding: 0;
	}

	.user-links-list__item-link-flair {
		background-color: var(--neon-green);
		opacity: 0;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		transform-origin: 0 0;
		will-change: transform;
		pointer-events: none;
		position: absolute;
		translate: none;
		rotate: none;
		scale: none;
		z-index: 1;
	}

	.user-links-list__item {
		width: 100%;
		position: relative;
	}

	.user-links-list__item-link {
		display: flex;
		justify-content: center;
		width: 100%;
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		text-decoration: none;
		border-radius: 0.8rem;
		background: var(--grey);
		position: relative;
		overflow: hidden;
	}

	.user-links-list__item-link-name {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--white);
		pointer-events: none;
		z-index: 2;
	}

	@media only screen and (min-width: 768px) {
		.social-links-profile {
			max-width: 38.4rem;
			padding: 4rem;
		}
	}
</style>
