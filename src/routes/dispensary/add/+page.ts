import supabase from '$lib/supabase/client'
import type { PostgrestSingleResponse } from '@supabase/supabase-js'

interface StateData {
    id: string
    name: string
}

// Custom type for the response from Supabase
interface PostgrestError extends Error {
    name: string
}

interface PostgrestStateResponse {
    data?: StateData[] | null
    error?: PostgrestError
}

export async function load(): Promise<{ states: StateData[] }> {
    const response = (await supabase
        .from<StateData>('region')
        .select('*')) as PostgrestSingleResponse<StateData[]>

    if (response.error) {
        console.error('Error fetching states:', response.error.message)
        // You can handle the error case more specifically if needed
        return { states: [] }
    }

    return { states: response.data || [] }
}
