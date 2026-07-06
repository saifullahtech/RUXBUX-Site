export const FB_PIXEL_ID = "960379810361080";

function track(method, args, retryCount = 0) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(method, ...args);
    return;
  }

  if (typeof window !== "undefined" && retryCount < 10) {
    window.setTimeout(() => track(method, args, retryCount + 1), 100);
  }
}

export const pageview = () => {
  track("track", ["PageView"]);
};

export const event = (name, options = {}) => {
  track("track", [name, options]);
};

export const viewContent = (options = {}) => {
  event("ViewContent", options);
};

export const addToCart = (options = {}) => {
  event("AddToCart", options);
};

export const initiateCheckout = (options = {}) => {
  event("InitiateCheckout", options);
};

export const purchase = (options = {}) => {
  event("Purchase", options);
};
