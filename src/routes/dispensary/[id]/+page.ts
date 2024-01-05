import supabase from '$lib/supabase/client'
import type { Load } from '@sveltejs/kit'

export const load: Load = async ({ params }) => {
    return {
        dispensaryQuery: await supabase
            .from('dispensary')
            .select('*')
            .eq('id', params.id)
            .maybeSingle(),
    }
}
