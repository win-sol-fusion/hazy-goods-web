<script lang="ts">
    import '../app.pcss'
    import { AppBar, AppShell } from '@skeletonlabs/skeleton'
    import type { AfterNavigate } from '@sveltejs/kit'
    import { afterNavigate } from '$app/navigation'

    // Scroll to Top on Navigation
    afterNavigate((params: AfterNavigate) => {
        const isNewPage = params.from?.url.pathname !== params.to?.url.pathname
        const elemPage = document.querySelector('#page')
        if (isNewPage && elemPage !== null) {
            elemPage.scrollTop = 0
        }
    })
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>Hazy Goods</AppBar>
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <!-- Hidden below Tailwind's large breakpoint -->
        <div id="sidebar-left" class="hidden lg:block">Sidebar</div>
    </svelte:fragment>
    <main>
        <slot />
    </main>
</AppShell>
