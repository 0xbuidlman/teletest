/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/teletest/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/teletest/workbox-v3.6.3"});

importScripts(
  "/teletest/precache-manifest.5d545d91d0fd48ef49f641ff00e6600c.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/teletest/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
