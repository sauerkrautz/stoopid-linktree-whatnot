export const handleSocial = (data: any) => {
  if (data.social === null) {
    return null;
  } else {
    const socials = Object.entries(data?.social).filter(([key, value]) => {
      return (
        value !== null &&
        key !== "id" &&
        key !== "userid" &&
        key !== "createdAt" &&
        key !== "updatedAt"
      );
    });
    return socials;
  }
};
