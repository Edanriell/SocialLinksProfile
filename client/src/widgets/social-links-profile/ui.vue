<script setup lang="ts">
	import imageMobile from "./assets/profile-mobile.jpg";
	import imageTablet from "./assets/profile-tablet.jpg";
	import imageDesktop from "./assets/profile-tablet.jpg";
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
			<li class="user-links-list__item"></li>
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

	.user-links-list__item {
		width: 100%;
		position: relative;
	}

	@media only screen and (min-width: 768px) {
		.social-links-profile {
			max-width: 38.4rem;
			padding: 4rem;
		}
	}
</style>
