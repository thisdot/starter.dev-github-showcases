<template>
	<header
		class="bg-black w-100 d-flex justify-space-between align-center py-4 px-8"
	>
		<nuxt-link to="/">
			<IconsGithubLogo custom-class="github_logo" />
		</nuxt-link>
		<profile-drop-down />
	</header>
</template>

<style lang="scss" scoped>
.github_logo {
	width: 2rem;
	height: 2rem;
}
</style>
