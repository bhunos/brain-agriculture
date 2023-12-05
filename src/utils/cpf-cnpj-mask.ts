export const cpfCnpjMask = (value: string) => {
  if (!value) return '';
  const document = value.replace(/\D/g, '');

  if (document.length > 11)
    return document.replace(
      /(\d{1,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
      (_, p1, p2, p3, p4, p5) =>
        [p1, p2 && `.${p2}`, p3 && `.${p3}`, p4 && `/${p4}`, p5 && `-${p5}`]
          .filter(Boolean)
          .join('')
    );

  return document.replace(
    /(\d{1,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
    (_, p1, p2, p3, p4) =>
      [p1, p2 && `.${p2}`, p3 && `.${p3}`, p4 && `-${p4}`]
        .filter(Boolean)
        .join('')
  );
};
