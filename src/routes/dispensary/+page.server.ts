export const actions = {
  create: async ({ request }) => {
    const data = await request.formData()
    const formName = data.get("name")
    return { success: true, name: formName }
  }
}
