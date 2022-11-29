type AdditionClasses = { [key: string]: boolean };

export const classes = (classList: Array<string>, additionClasses: AdditionClasses) => {
  Object.entries(additionClasses).map((key, value) => (value ? key : ''));
  return classList;
};
