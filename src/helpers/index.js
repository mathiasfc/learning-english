/**
 * Check if value is a valid e-mail.
 * @param { string } value to be validated
 * @returns { boolean } if the the value is valid e-mail or not
 */
export const isEmail = value => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const isMobile = () => {
  let isMobileDevice = false;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobileDevice = true;
  }

  return isMobileDevice;
};
