export function asError(error: any): Error {
  if (error instanceof Error) {
    return error;
  } else {
    return new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
}