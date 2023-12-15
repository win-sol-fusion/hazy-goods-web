import supabase from "$lib/supabase/client";

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();
      const formName = data.get("name");
      const formAddress = data.get("address");
      const formCity = data.get("city");
      const formState = data.get("state");
      const formZip = data.get("zip");
      const formStatus = data.get("status");
      const formCreatedBy = data.get("createdBy");

      const { data: insertData, error } = await supabase
        .from("dispensary")
        .insert([
          {
            name: formName,
            address_1: formAddress,
            city: formCity,
            region_id: formState,
            postal_code: formZip,
            validation_status_id: formStatus,
            created_by: formCreatedBy
          },
        ]);

      if (error) {
        console.error("Error inserting data into supabase:", error.message);
        return { success: false, error: "Failed to insert data into Supabase" };
      }
      return { success: true, data: insertData };
    } catch (error) {
      console.error("Error processing form submission:", error.message);
      return { success: false, error: "Failed to process form submission" };
    }
  },
};
