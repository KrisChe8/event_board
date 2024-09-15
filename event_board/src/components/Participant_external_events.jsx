import Business_api_events from "./Business_api_events";

function External_events({ useremail, session, token }) {
  const size_show = 16;
  return (
    <>
      <Business_api_events
        size={size_show}
        useremail={useremail}
        session={session}
        token={token}
      />
    </>
  );
}

export default External_events;
