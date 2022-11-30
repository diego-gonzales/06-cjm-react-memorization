
# React Memorization

- Memorization is responsible for memorizing a component.

- Rememorizes it the moment its ***props*** change.

- Avoid rerenders.

You should use it when:

1. We've many elements rendered in a list 📖.
2. We call data from API's 📲.
3. A component becomes very heavy 🏋️‍♂️.
4. Performance alerts are displayed in the console 💻.

Important:
1. For memorizing components we use ***'memo'***.
2. When a component memorized receives functions as props from the parent, then those functions should be memorized with the hook ***'useCallback()'***