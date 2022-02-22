const detectAndroid = () => {
  const toMatch = [/Android/i];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

const detectIphone = () => {
  const toMatch = [/iPhone/i, /iPad/i, /iPod/i];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

export const checkUserPlatform = () => {
  if (detectAndroid()) {
    return "android";
  }
  if (detectIphone()) {
    return "iphone";
  }
  return "pc";
};

export const redirectToProperLink = (userPlatform: any) => {
  switch (userPlatform) {
    case "android":
      return "https://play.google.com/store/apps/details?id=com.mobile.eventx"      
    case "iphone":
      return "https://apps.apple.com/us/app/eventx-eventos-e-ingressos/id1584406908"
    case "pc": 
      return "https://play.google.com/store/apps/details?id=com.mobile.eventx"
  }
};