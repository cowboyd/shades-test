import * as expect from 'expect';
import { get } from 'shades';

describe('shades', () => {
  it('can get stuff', () => {

    let name = get('username')({ username: 'cowboyd' });
    expect(name).toEqual('cowboyd');

    let getUsername = get('user', 'username');
    let username = getUsername({ user: { username: 'cowboyd' } });

    expect(username).toEqual('cowboyd');

    expect(username.toString()).toEqual('cowboyd');
  });
});
