export const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    alert('connect to lobby first');
    return true;
  }
};
