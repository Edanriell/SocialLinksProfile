<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Skeleton from "primevue/skeleton";
import {onMounted, ref} from "vue";

import {getUserQuery} from "@entities/users";
import {type User} from "@entities/users/model";
import {Link} from "@shared/ui";

const userData = ref<User | null>(null);
const isDataLoading = ref("notLoading");

onMounted(async () => {
	try {
		isDataLoading.value = "loading";
		const data = await getUserQuery();
		if (data) userData.value = data;
		isDataLoading.value = "loaded";
	} catch (error) {
		isDataLoading.value = "error";
		console.error("Error fetching data:", error);
	}
})
</script>

<template>
	<article v-if="isDataLoading === 'error'" class="social-links-profile">
		<div class="social-links-profile__error">
			<img class="social-links-profile__error-icon" src="/icons/circle-exclamation-solid.svg" alt="Error icon.">
			<h2 class="social-links-profile__error-text">Unable to load social links profile.</h2>
		</div>
	</article>
	<article v-if="isDataLoading === 'loading'" class="social-links-profile">
		<h2 class="visually-hidden">Social links profile is loading.</h2>
		<picture>
			<Skeleton shape="circle" size="8.8rem" class="social-links-profile__user-image"></Skeleton>
		</picture>
		<Skeleton width="18.318rem" height="3.6rem" class="social-links-profile__user-full-name"></Skeleton>
		<Skeleton width="16.871rem" height="2.099rem" class="social-links-profile__user-location"></Skeleton>
		<Skeleton width="24.834rem" height="2.099rem" class="social-links-profile__user-info"></Skeleton>
		<ul class="social-links-profile__user-link-list user-links-list">
			<li class="user-links-list__item">
				<Skeleton width="100%" height="4.496rem"></Skeleton>
			</li>
			<li class="user-links-list__item">
				<Skeleton width="100%" height="4.496rem"></Skeleton>
			</li>
			<li class="user-links-list__item">
				<Skeleton width="100%" height="4.496rem"></Skeleton>
			</li>
			<li class="user-links-list__item">
				<Skeleton width="100%" height="4.496rem"></Skeleton>
			</li>
			<li class="user-links-list__item">
				<Skeleton width="100%" height="4.496rem"></Skeleton>
			</li>
		</ul>
	</article>
	<article v-if="isDataLoading === 'loaded'" class="social-links-profile">
		<picture>
			<source media="(min-width: 375px)" :srcset=userData?.images.mobile />
			<source media="(min-width: 768px)" :srcset=userData?.images.tablet />
			<source media="(min-width: 1024px)" :srcset=userData?.images.desktop />
			<img class="social-links-profile__user-image" :src=userData?.images.desktop alt="User {{userData?.fullName}} profile." />
		</picture>
		<h2 class="social-links-profile__user-full-name">{{userData?.fullName}}</h2>
		<p class="social-links-profile__user-location">{{userData?.location}}</p>
		<p class="social-links-profile__user-info">{{userData?.userInfo}}</p>
		<ul class="social-links-profile__user-link-list user-links-list">
			<li v-for="(link, index) in userData?.socialLinks" :key="index" class="user-links-list__item">
				<Link :linkText="link.linkText" :linkHref="link.linkHref" />
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
		font-family: var(--font-family),serif;
		font-weight: 600;
		font-size: 2.4rem;
		color: var(--white);
		margin: 0 0 0.4rem;
		text-align: center;
	}

	.social-links-profile__error {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 4rem;
	}

	.social-links-profile__error-text {
		font-family: var(--font-family),serif;
		font-weight: 600;
		font-size: 2rem;
		color: var(--white);
		margin: 0 0 0.4rem;
		text-align: center;
	}

	.social-links-profile__error-icon {
		width: 9.5rem;
		height: 9.5rem;
		object-fit: cover;
		border-radius: 50%;
	}

	.social-links-profile__user-location {
		font-family: var(--font-family),serif;
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--neon-green);
		margin: 0 0 2.4rem;
		text-align: center;
	}

	.social-links-profile__user-info {
		margin: 0 0 2.4rem;
		font-family: var(--font-family),serif;
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
