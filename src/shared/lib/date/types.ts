declare const isoDateStringBrand: unique symbol;

export type ISODateString = string & {
  readonly [isoDateStringBrand]: "ISODateString";
};

const ISO_DATE_STRING_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

export function toISODateString(value: Date): ISODateString {
  return value.toISOString() as ISODateString;
}

export function asISODateString(value: string): ISODateString {
  if (!ISO_DATE_STRING_PATTERN.test(value) || Number.isNaN(Date.parse(value))) {
    throw new Error(`Invalid ISO date string: ${value}`);
  }

  return value as ISODateString;
}
