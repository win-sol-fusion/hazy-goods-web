import supabase from '$lib/supabase/client'
import type { Load } from '@sveltejs/kit'

export const load: Load = async () => {
    return {
        dispensariesPromise: await supabase.from('dispensary').select('*'),
    }
}
