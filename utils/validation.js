export const isValidUrl = (url) => {
    const regex = /^(https?:\/\/[^\s]+)$/;
    return regex.test(url);
  };
  