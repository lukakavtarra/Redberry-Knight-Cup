const postApi = async () => {
  const response = await fetch(
    "https://chess-tournament-api.devtest.ge/api/register",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        connection: "keep-alive",
        date: "Sat,02 Jul 2022 16:41:58 GMT ",
        server: "nginx/1.18.0 (Ubuntu)",
        "transfer-encoding": "chunked ",
        "x-powered-by": "Express",
      },
      body: {
        name: "Beth Harmon",
        email: "beth@redberry.ge",
        phone: "598125819",
        date_of_birth: "10/20/1997",
        experience_level: "beginner",
        already_participated: true,
        character_id: 2,
      },
    }
  );
};

/* <button onClick="mySubmit()">submit</button> */
