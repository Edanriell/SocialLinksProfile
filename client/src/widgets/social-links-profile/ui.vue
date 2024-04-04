<script setup lang="ts">
	import imageMobile from "./assets/profile-mobile.jpg";
	import imageTablet from "./assets/profile-tablet.jpg";
	import imageDesktop from "./assets/profile-tablet.jpg";
</script>

<template>
	<article class="social-links-profile">
		<picture>
			<source media="(min-width: 320px)" srcset="{{imageMobile}}">
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
	.social-links-profile{}
	.social-links-profile__user-image{}
	.social-links-profile__user-full-name{}
	.social-links-profile__user-location{}
	.social-links-profile__user-info{}
	.social-links-profile__user-link-list{}

	.user-links-list{}
	.user-links-list__item{}
	.user-links-list__item-link{}
	.user-links-list__item-link-name{}
</style>