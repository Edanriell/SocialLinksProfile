<script setup lang="ts">
	import gsap from "gsap";
	import { ref } from "vue";

	import imageMobile from "./assets/profile-mobile.jpg";
	import imageTablet from "./assets/profile-tablet.jpg";
	import imageDesktop from "./assets/profile-tablet.jpg";

	const follower = ref(null);

	const mouseMoveListener = (event: any) => {
		const { target, x, y } = event;
		const isTargetLinkOrBtn = target?.closest("a") || target?.closest("button");
		gsap.to(follower.value, {
			x: x,
			y: y,
			width: "60px",
			height: "60px",
			duration: 1,
			ease: "power4",
			opacity: isTargetLinkOrBtn ? 0.6 : 1
		});
	};

	const mouseEnter = (event: any) => {
		window.addEventListener("mousemove", mouseMoveListener);
	};

	const mouseLeave = (event: any) => {
		window.removeEventListener("mousemove", mouseMoveListener);
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
					@mouseenter="(event) => mouseEnter(event)"
					@mouseleave="(event) => mouseLeave(event)"
				>
					<span class="user-links-list__item-link-name">LinkedIn</span>
					<div ref="follower" class="follower"></div>
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
	.follower {
		background-color: crimson;
		z-index: 1;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;

		box-sizing: border-box;
		margin: 0;
		padding: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;
		transform-origin: 0 0;
		will-change: transform;
		translate: none;
		rotate: none;
		scale: none;
	}

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

	.user-links-list__item {
		width: 100%;
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
	}

	.user-links-list__item-link-name {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--white);
	}

	@media only screen and (min-width: 768px) {
		.social-links-profile {
			max-width: 38.4rem;
			padding: 4rem;
		}
	}
</style>
