<script lang="ts">
    import '../app.pcss'
    import { AppBar, AppShell } from '@skeletonlabs/skeleton'
    import type { AfterNavigate } from '@sveltejs/kit'
    import { afterNavigate } from '$app/navigation'
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton'
    import { Icon } from '@steeze-ui/svelte-icon'
    import { BuildingStorefront } from '@steeze-ui/heroicons'
    import { PlusCircle } from '@steeze-ui/heroicons'
    import { ClipboardDocumentList } from '@steeze-ui/heroicons'

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
            <AppRailAnchor href="/">
                <div class="ml-7">
                    <Icon
                        src={BuildingStorefront}
                        size="20px"
                        theme="outline"
                    />
                </div>
                Home</AppRailAnchor
            >
            <AppRailAnchor href="/dispensary">
                <div class="ml-7">
                    <Icon
                        src={ClipboardDocumentList}
                        size="20px"
                        theme="outline"
                    />
                </div>
                Dispensary List</AppRailAnchor
            >
            <AppRailAnchor href="/dispensary/add">
                <div class="ml-7">
                    <Icon src={PlusCircle} size="20px" theme="outline" />
                </div>
                Add New Dispensary</AppRailAnchor
            >
        </svelte:fragment>
    </AppRail>
    <main>
        <slot />
    </main>
</AppShell>
