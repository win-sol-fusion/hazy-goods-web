<script lang="ts">
    import '../app.pcss'
    import { AppBar, AppShell } from '@skeletonlabs/skeleton'
    import type { AfterNavigate } from '@sveltejs/kit'
    import { afterNavigate } from '$app/navigation'
    import { AppRail, AppRailAnchor} from '@skeletonlabs/skeleton'
    // Scroll to Top on Navigation
    afterNavigate((params: AfterNavigate) => {
        const isNewPage = params.from?.url.pathname !== params.to?.url.pathname
        const elemPage = document.querySelector('#page')
        if (isNewPage && elemPage !== null) {
            elemPage.scrollTop = 0
        }
    })

let currentTile: number = 0
</script>


<AppShell>
    <svelte:fragment slot="header">
        <AppBar>Hazy Goods</AppBar>
    </svelte:fragment>
    
<AppRail>
    <svelte:fragment slot="lead">
    <AppRailAnchor href="/">Home</AppRailAnchor>
    <AppRailAnchor href="/dispensary">Dispensary List</AppRailAnchor>
    <AppRailAnchor href="/dispensary/add">Add New Dispensary</AppRailAnchor>
    </svelte:fragment>
</AppRail>
    <main>
        <slot />
    </main>
</AppShell>
