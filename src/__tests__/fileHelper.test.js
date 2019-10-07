const {
  remove,
  read,
  write,
} = require('../fileHelper');

describe('fileHelper.js', () => {
  it('should be able to read this test file', async () => {
    const path = './src/__tests__/index.test.js';
    const content = await read(path);
    expect(content).not.toBeNull();
  });

  it('should be able to create a new file and write to it', async () => {
    const path = './tmp/test.txt';
    await write(path, 'hello world', 'utf-8');
    const content = await read(path);
    expect(content.toString()).toBe('hello world');
  });

  it('should be able to create a new file and remove it', async () => {
    const path = './tmp/test.txt';
    await write(path, 'hello world', 'utf-8');
    let content = await read(path);
    expect(content.toString()).toBe('hello world');

    await remove(path);
    content = await read(path);
    expect(content).toBe(null);
  });
});
