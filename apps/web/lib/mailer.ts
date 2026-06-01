import { MailtrapClient } from "mailtrap";

const client = new MailtrapClient({
  token: '4778193a0c806cfa540fd8cd93659e22' as string,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "My Travel App",
};

export default client;

// 