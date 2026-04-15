// Use browser API for Firefox compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.runtime.onInstalled.addListener(() => {
  browserAPI.contextMenus.create({
    id: "generateQRText",
    title: "Share this text as QR code",
    contexts: ["selection"]
  });

  browserAPI.contextMenus.create({
    id: "generateQRLink",
    title: "Share this link as QR code",
    contexts: ["link"]
  });
});

/**
 * Store text in local storage and open the QR popup window.
 * Using storage instead of URL query params avoids URL length limits
 * that silently truncate large text selections.
 */
function openQRPopup(text) {
  browserAPI.storage.local.set({ qrText: text }).then(() => {
    browserAPI.windows.create({
      url: browserAPI.runtime.getURL("popup.html"),
      type: "popup",
      width: 320,
      height: 360
    });
  });
}

browserAPI.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "generateQRText" && info.selectionText) {
    openQRPopup(info.selectionText);
  } else if (info.menuItemId === "generateQRLink" && info.linkUrl) {
    openQRPopup(info.linkUrl);
  }
});
