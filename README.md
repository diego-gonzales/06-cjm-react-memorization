
# React Memorization

## memo
- Memorization is responsible for memorizing a component.

- Rememorizes it the moment its ***props*** change.

- Avoid rerenders.

You should use it when:

1. We've many elements rendered in a list 📖.
2. We call data from API's 📲.
3. A component becomes very heavy 🏋️‍♂️.
4. Performance alerts are displayed in the console 💻.

## useCallaback

- Memorize a function so as not to render every time.
- Use it always a function is passed as prop of a memorized component.
- Use it always a function is passed as parameter of an effect.

## useMemo
- Memorizes a calculated value, so the result of a function.
- Generates computed properties.
- Use it in heavy processes.

Important:
1. For memorizing components we use ***'memo'***.
2. When a component memorized receives functions as props from the parent, then those functions should be memorized with the hook ***'useCallback()'***