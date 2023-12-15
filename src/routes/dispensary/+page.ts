import supabase from '$lib/supabase/client'
import type { Load } from '@sveltejs/kit'

export const load: Load = async () => {
    return {
        dispensariesQuery: await supabase.from('dispensary').select('*'),
    }
}
