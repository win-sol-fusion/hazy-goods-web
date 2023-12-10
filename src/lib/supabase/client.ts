import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_API_URL} from '$env/static/public'

export default createClient(PUBLIC_SUPABASE_API_URL, PUBLIC_SUPABASE_ANON_KEY)