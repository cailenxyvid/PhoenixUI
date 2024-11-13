import type { Session } from "@auth/sveltekit";
import { SvelteKitAuth } from "@auth/sveltekit";
import Cognito from "@auth/sveltekit/providers/cognito";

//# todo: is this the right way to expose the cognito ID token? And should we actually be sending that token?
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Cognito],
  debug: true,
  trustHost: true,
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token, user }): Promise<Session> {
      // @ts-ignore
      // session.token = token.idToken
      return { session, token };
    },
  },
});
