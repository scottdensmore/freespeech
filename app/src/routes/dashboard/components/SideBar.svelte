<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Chat, ViewGrid, User } from '@steeze-ui/heroicons';
	import { SelectedDashboardPage } from '$lib/stores';
	import { DashboardPages } from '$lib/types';
	import { EyeOpen } from '@steeze-ui/radix-icons';
</script>

<section>
	<h1><span class="brand"><Icon src={Chat} width="20px" /></span> Free Speech</h1>
	<div
		class={$SelectedDashboardPage == DashboardPages.projects ? 'selected' : ''}
		on:click={() => ($SelectedDashboardPage = DashboardPages.projects)}
	>
		<Icon src={ViewGrid} theme="solid" width="20px" /><span>Projects</span>
	</div>
	<div
		class={$SelectedDashboardPage == DashboardPages.account ? 'selected' : ''}
		on:click={() => ($SelectedDashboardPage = DashboardPages.account)}
	>
		<Icon src={User} theme="solid" width="20px" /><span>Account</span>
	</div>
	<div
		class={$SelectedDashboardPage == DashboardPages.appearance ? 'selected' : ''}
		on:click={() => ($SelectedDashboardPage = DashboardPages.appearance)}
	>
		<Icon src={EyeOpen} theme="solid" width="20px" /><span>Appearance</span>
	</div>
</section>

<style>
	section {
		width: 250px;
		height: 100vh;
		background-color: var(--surface-1);
		border-right: var(--surface-4) solid 1px;
	}

	h1 {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 20px;
	}

	.brand {
		background-color: var(--primary);
		border-radius: 5px;
		padding: 10px;
		display: flex;
		align-items: center;
		width: fit-content;
	}

	div {
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		background-color: var(--surface-2);
		border: var(--surface-4) solid 1px;
		color: var(--text);
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	div:hover {
		background-color: var(--surface-3);
		border: var(--surface-5) solid 1px;
	}

	.selected {
		background-color: var(--surface-3);
		border: var(--surface-5) solid 1px;
	}
</style>
