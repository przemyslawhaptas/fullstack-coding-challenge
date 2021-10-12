import { Either } from 'monet';

export function genericFetch<T>(
    url: string,
    options: any = {
      credentials: 'include',
    },
  ): Promise<T> {
    return new Promise(async (res, rej) => {
      const timeout = setTimeout(function() {
        rej('ERROR: timeout to url: ' + url)
      }, 4000)

      try {
        let response = await fetch(url, options)

        clearTimeout(timeout)

        const json: T = await response.json()

        res(json)
      } catch (e) {
        rej(e)
      }
    })
  };

export const get = <T>(url: string): Promise<Either<string, T>> =>
  Either.fromPromise(genericFetch(url));

export const post = <T>(url: string, params: any): Promise<Either<string, T>> =>
  Either.fromPromise(genericFetch(
    url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    },
  ));
