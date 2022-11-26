type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]) {
  return [
    cls,
    ...(mods ? Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames]) => classNames) : []),
    ...(additional ? additional.filter(Boolean): []),
  ].join(' ');
}
