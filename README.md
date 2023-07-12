# Next 13 React Server Components Firebase Auth Example

The working site is here [https://nextfire-ashy.vercel.app](https://nextfire-ashy.vercel.app/). You can register and it will display your email address.

I made this repo, a very small website that serves as an example of how to use firebase auth with react server components in next.js 13, because the normal firebase client side auth set up doesn't work with server components and I couldn't find much on how to make it work. I did find [this article](https://dev.to/geiel/how-to-use-firebase-authentication-in-nextjs-13-client-and-server-side-1bbn) which this repo is based on, though I did some things differently.\* There's also more general info on firebase server side auth [in the firebase docs](https://firebase.google.com/docs/auth/admin).

This is just an **example** not any sort of starter that should be used to build an actual app. There's no error handling, loading states, type safety etc—it just describes a success path and would for sure break if you tried to use it for something real.

### Start

To run it locally you'll have to [set up a firebase project](https://firebase.google.com/docs/web/setup) as usual and put your keys in /lib/firebase-client.js. Then you need to get your app's service account credentials in order to use firebase admin: go to your firebase project console aka the firebase site > project settings > service accounts tab > generate new private key button > download the file > rename it service_account.json > put in the root of the project.

The code is commented with hopefully all the info you'll need so check that out. Basically the flow is: registration/login is handled by the normal client side firebase sdk, we extract the ID token and send it to the login endpoint (built with a route handler which is new in next 13 too), then firebase admin (firebase's server side sdk) validates the id token and creates a session cookie, the client side is then logged out (important), and from then on you do all your auth by verifying the session cookie until it's logged out or expires, at which point you start the process over.

### More

If you were to build an actual app using this auth flow you would use firebase admin for everything: auth, db, storage etc. Which makes sense as one of the basic ideas behind server components is to do your data fetching and processing server side and as much as possible send html rather than js to the client.

You can't use firebase security rules when fetching data server side fyi. If you have an already existing app that relies on security rules that you're thinking about refactoring to use server components might want to think again.

Another thing that's worth thinking about is if firebase's whole thing is a good match for server components. I made a version of this app with data and it felt like it wasn't totally resonant. This is just an initial impression and I don't particularly know what I'm doing with all the new stuff so I could be wrong. But the transition from a pure client side SPA to this hybrid situation is pretty major. It's also all very new and changable. [Server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions), which are an essential piece of the puzzle, are still in alpha. Firebase will prob come out with something that fits this new form better one would think.

There's also [a whole cache and request management system](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping) built into next 13 that requires you to use fetch which you'd missing out on if you use firebase. Though you can use fetch with firebase but then I guess you'd be missing out on all the helpful sdk features. Not totally sure as I've never used firebase without the sdk. Much to think about.

\*What I did differntly than the article. I didn't put the session validation in an endpoint, seems like that's more expensive than just validating the cookie on its own? I also didn't use middlewear but I think you need to if you want to have protected routes. You can use logic in your components to effectively protect your routes if you want to though seems like.

Hope you find this helpful.
