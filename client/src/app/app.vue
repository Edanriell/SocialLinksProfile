<script setup lang="ts">
	import { SocialLinksProfile } from "@widgets/social-links-profile";
</script>

<template>
	<main class="main">
		<h1 class="visually-hidden">Social links profile</h1>
		<SocialLinksProfile />
	</main>
</template>

<style>
	@import "./styles/styles.scss";

	.main {
		width: 100%;
		height: 100%;
		background: var(--black);
		padding-top: 11.6rem;
		padding-bottom: 11.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
</style>
