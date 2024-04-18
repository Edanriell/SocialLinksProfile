<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import gsap from "gsap";
import {ref} from "vue";

defineProps({
	linkText: String,
	linkHref: String
});

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
	<a
		class="link"
		:href="linkHref"
		target="_blank"
		ref="linkRef"
		type="button"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
	>
		<span ref="textRef" class="link__text">{{ linkText }}</span>
		<div ref="flairRef" class="link__flair"></div>
	</a>
</template>

<style>
	.link {
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

	.link__flair {
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

	.link__text {
		font-family: var(--font-family),serif;
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--white);
		pointer-events: none;
		z-index: 2;
	}
</style>
