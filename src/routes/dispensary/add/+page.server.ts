import supabase from '$lib/supabase/client'

export const actions = {
    create: async ({ request }) => {
        console.log('making create request')
        try {
            const data = await request.formData()
            const formName = data.get('name')
            const formAddress = data.get('address')
            const formCity = data.get('city')
            const formState = data.get('region_id')
            const formZip = data.get('zip')

            const { data: insertData, error } = await supabase
                .from('dispensary')
                .insert([
                    {
                        name: formName,
                        address_1: formAddress,
                        city: formCity,
                        region_id: formState,
                        postal_code: formZip,
                        validation_status_id: 2, //pending
                        created_by: '22222222-2222-2222-2222-222222222222', // placeholder user id
                    },
                ])
            if (error) {
                throw error
            }
            return { success: true }
        } catch (error: any) {
            console.error(error)
            return {
                success: false,
                message: error.message,
            }
        }
    },
}
