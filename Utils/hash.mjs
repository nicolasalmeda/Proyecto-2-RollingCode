
export const generarSal = () => {
  return CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
};

export const hashearContrasena = (contrasena, sal) => {
  const hash = CryptoJS.PBKDF2(contrasena, sal, { keySize: 256 / 32, iterations: 1000 });
  return hash.toString(CryptoJS.enc.Hex);
};

export const verificarContrasena = (contrasenaIngresada, contrasenaAlmacenada, sal) => {
  const hashIngresada = hashearContrasena(contrasenaIngresada, sal);
  return hashIngresada === contrasenaAlmacenada;
};