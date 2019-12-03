let x = 1,
  y = 1,
  n1 = null,
  n2 = undefined,
  n3 = "defined",
  n4 = true,
  n5 = false,
  value = 3.5;

test('断言', () => {
  expect(x).toBe(y) //判断相等，使用Object.is实现
  expect(1).not.toBe(2) //判断不等
  expect(n1).toBeNull(); //判断是否为null
  expect(n2).toBeUndefined(); //判断是否为undefined
  expect(n3).toBeDefined(); //判断结果与toBeUndefined相反
  expect(n4).toBeTruthy(); //判断结果为true
  expect(n5).toBeFalsy(); //判断结果为false
  expect(value).toBeGreaterThan(3); //大于3
  expect(value).toBeGreaterThanOrEqual(3.5); //大于等于3.5
  expect(value).toBeLessThan(5); //小于5
  expect(value).toBeLessThanOrEqual(4.5); //小于等于4.5
  expect(value).toBeCloseTo(3.5); // 浮点数判断相等
  const v2 = 0.2 + 0.3;
  expect(v2).toBeCloseTo(0.5); // 浮点数判断相等
  expect('Christoph').toMatch(/stop/); //正则表达式判断
  expect(['one', 'two']).toContain('one'); //不解释
});