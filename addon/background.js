"use strict";
/* jshint esversion: 6, strict: global */
/* jshint laxbreak: true */
/* globals chrome */
// licensed under the MPL 2.0 by (github.com/serv-inc)

const ALLOW = RegExp('(moz|chrome)-extension://');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if ( BLACKLIST.test(tab.url) ) {
    if ( ! ALLOW.test(tab.url) ) {
      chrome.tabs.update(tabId,
		         {'url': chrome.extension.getURL('blockpage.html')
                          + '?' + encodeURIComponent(tab.url)});
    }
  }
});

const BLACKLIST = RegExp(String.raw`^about:addons`);
