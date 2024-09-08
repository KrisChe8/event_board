import supabase from "./src/config/supabaseClient";

export const sendDatatodb = async (
  user,
  name,
  description,
  date,
  time,
  img
) => {
  if (!user || !name) {
    console.log("no user or event name");
    return;
  }
  const { data, error } = await supabase
    .from("my_tickets")
    .insert([
      {
        user_email: user,
        event_name: name,
        event_description: description,
        date: date,
        time: time,
        img_url: img,
      },
    ])
    .select();
  if (error) {
    console.log(error);

    alert("Something went wrong. Try again!");
  }
  if (data) {
    console.log(data);
  }
};
