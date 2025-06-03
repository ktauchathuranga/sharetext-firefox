// Use browser API for Firefox compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.runtime.onInstalled.addListener(() => {
  // Context menu for selected text
  browserAPI.contextMenus.create({
    id: "generateQRText",
    title: "Share this text as QR code",
    contexts: ["selection"]
  });

  // Context menu for links
  browserAPI.contextMenus.create({
    id: "generateQRLink",
    title: "Share this link as QR code",
    contexts: ["link"]
  });
});

browserAPI.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "generateQRText" && info.selectionText) {
    const popupUrl = browserAPI.runtime.getURL(`popup.html?text=${encodeURIComponent(info.selectionText)}`);

    browserAPI.windows.create({
      url: popupUrl,
      type: "popup",
      width: 300,
      height: 300
    });
  } else if (info.menuItemId === "generateQRLink" && info.linkUrl) {
    const popupUrl = browserAPI.runtime.getURL(`popup.html?text=${encodeURIComponent(info.linkUrl)}`);

    browserAPI.windows.create({
      url: popupUrl,
      type: "popup",
      width: 300,
      height: 300
    });
  }
});
