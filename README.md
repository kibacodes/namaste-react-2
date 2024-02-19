# Namaste React 🚀

Emmet - A plugin that helps to make HTML/CSS workflows fast by making you to write code quickly.

Difference between Library and Framework - It would be that for a library, the developer is in control of when to use it whereas in a framework, the framework itself is providing you with where you need to call it.

Why is React known as React? - Since, it 'reacts' quickly to changes in the page without reloading the whole page.

What is crossorigin attribute in script tag? - It sets the mode of the request to an HTTP CORS Request. Basically, CORS or cross-origin requests are for resources from another domain, example, Google Fonts in your React App.

Difference between react.development.js and react.production.js via CDN links- Dev link is basically there for development of the App and has error messages, debugging tools and warnings. Not optimized for production and is large in size which reduces performance whereas Production link is optimized for production and is small in size which improves app's performance. However, it doesn't have the debugging tools, error messages and warnings.

Async vs defer - In async, the html code parsing and JS script fetching goes side by side. Once the script is fetched, the parsing stops and script is executed. Thereafter, parsing continues. In defer, once the parsing is complete then only the script is executed. Till, the parsing is going on, it fetches the script. Async doesn't guarantee of order of execution but defer does. Hence, defer is preferred over async in most cases.

...

# Parcel
- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different bundles for dev and prod