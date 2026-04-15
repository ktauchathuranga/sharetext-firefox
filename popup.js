document.addEventListener("DOMContentLoaded", async function () {
  const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
  const qrcodeContainer = document.getElementById("qrcode");
  const errorContainer = document.getElementById("error");

  let text = null;

  // 1. Try to get text from storage (set by context menu handler)
  try {
    const result = await browserAPI.storage.local.get("qrText");
    if (result.qrText) {
      text = result.qrText;
      await browserAPI.storage.local.remove("qrText");
    }
  } catch (e) {
    // Storage access failed — fall through to tab URL fallback
  }

  // 2. Fallback: generate QR for the current page URL (toolbar icon click)
  if (!text) {
    try {
      const tabs = await browserAPI.tabs.query({ active: true, currentWindow: true });
      if (tabs[0] && tabs[0].url) {
        text = tabs[0].url;
      }
    } catch (e) {
      // Tabs query failed
    }
  }

  // 3. Nothing to encode
  if (!text || text.trim() === "") {
    showError("No text or URL available to encode.");
    return;
  }

  // 4. Guard against QR data capacity limits
  //    QR level H supports ~1,273 bytes, but the library handles
  //    encoding internally; texts above ~2,000 chars almost always fail.
  if (text.length > 2000) {
    showError("Text is too long for a QR code. Please select a shorter text (under ~2,000 characters).");
    return;
  }

  // 5. Generate QR code with error handling
  try {
    new QRCode(qrcodeContainer, {
      text: text,
      width: 250,
      height: 250,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (e) {
    showError("Failed to generate QR code. The text may be too long or contain unsupported characters.");
  }

  function showError(message) {
    qrcodeContainer.style.display = "none";
    errorContainer.textContent = message;
    errorContainer.style.display = "flex";
  }
});
