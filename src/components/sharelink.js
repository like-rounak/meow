export const generateShareableLink = (dataId) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/share/${dataId}`;
};
