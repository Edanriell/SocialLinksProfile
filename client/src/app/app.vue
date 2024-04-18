<script setup lang="ts">
import {SocialLinksProfile} from "@widgets/social-links-profile";
</script>

<template>
	<main class="container">
		<h1 class="visually-hidden">Social links profile</h1>
		<SocialLinksProfile />
	</main>
</template>

<style>
	@import "./styles/styles.scss";

	.container {
		width: 100%;
		height: 100%;
		background: var(--black);
		padding: 11.6rem 2.4rem 11.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	@media only screen and (min-width: 768px) {
		.container {
			padding: 17.4rem 0 17.5rem;
		}
	}
</style>
