import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_API_URL} from '$env/static/public'

export async function load() {
  const supabase = createClient(PUBLIC_SUPABASE_API_URL, PUBLIC_SUPABASE_ANON_KEY)
  return {
    foo: "bar",
    thing1: await supabase.from("dispensary").select("*")
  }
}
