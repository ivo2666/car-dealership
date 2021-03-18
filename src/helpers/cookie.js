const getCookie = (name) => {
  if (typeof document === 'undefined') {
    return null
  }
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
  }
  
  export default getCookie