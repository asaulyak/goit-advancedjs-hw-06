/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення.
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K extends unknown, V extends unknown> {
  key: K;
  value: V;
}

export { KeyValuePair };
