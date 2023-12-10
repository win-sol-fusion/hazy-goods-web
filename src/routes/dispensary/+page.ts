import supabase from "$lib/supabase/client"

export async function load() {
  return {
    foo: "bar",
    thing1: await supabase.from("dispensary").select("*"),
  }
}
