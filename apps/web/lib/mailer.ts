import { MailtrapClient } from "mailtrap";

const client = new MailtrapClient({
  token: 'b4eb49f00efcca07e8618eb067991515' as string,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "My Travel App",
};

export default client;

// 