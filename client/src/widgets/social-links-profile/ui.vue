<script setup lang="ts">
	import imageMobile from "./assets/profile-mobile.jpg";
	import imageTablet from "./assets/profile-tablet.jpg";
	import imageDesktop from "./assets/profile-tablet.jpg";
</script>

<template>
	<article class="social-links-profile">
		<picture>
			<source media="(min-width: 375px)" srcset="{{imageMobile}}">
			<source media="(min-width: 768px)" srcset="{{imageTablet}}">
			<source media="(min-width: 1024px)" srcset="{{imageDesktop}}">
			<img class="social-links-profile__user-image" src="{{imageDesktop}}" alt="User X profile">
		</picture>
		<h2 class="social-links-profile__user-full-name">Jessica Randall</h2>
		<p class="social-links-profile__user-location">London, United Kingdom</p>
		<p class="social-links-profile__user-info">"Front-end developer and avid reader."</p>
		<ul class="social-links-profile__user-link-list user-links-list">
			<li class="user-links-list__item">
				<a class="user-links-list__item-link"	href="#" target="_blank">
					<span class="user-links-list__item-link-name">GitHub</span>
				</a>
			</li>
			<li class="user-links-list__item">
				<a class="user-links-list__item-link" href="#" target="_blank">
					<span class="user-links-list__item-link-name">Frontend Mentor</span>
				</a>
			</li>
			<li class="user-links-list__item">
				<a class="user-links-list__item-link" href="#" target="_blank">
					<span class="user-links-list__item-link-name">LinkedIn</span>
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
		padding: 2.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.social-links-profile__user-image {
		width: 8.8rem;
		height: 8.8rem;
		border-radius: 50%;
		margin-bottom: 2.4rem;
	}

	.social-links-profile__user-full-name {
		font-family: var(--font-family);
		font-weight: 600;
		font-size: 2.4rem;
		color: var(--white);
		margin-bottom: 0.4rem;
	}

	.social-links-profile__user-location {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--neon-green);
		margin-bottom: 2.4rem;
	}

	.social-links-profile__user-info {
		font-family: var(--font-family);
		font-weight: 400;
		font-size: 1.4rem;
		color: var(--white);
	}

	.social-links-profile__user-link-list {
		list-style: none;
	}

	.user-links-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1.6rem;
	}

	.user-links-list__item {
		width: 100%;
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
	}

	.user-links-list__item-link {
		width: 100%;
	}

	.user-links-list__item-link-name {
		font-family: var(--font-family);
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--white);
	}
</style>