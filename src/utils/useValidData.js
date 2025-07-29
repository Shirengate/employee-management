export const useValidData = () => {
  function checkValidFields(obj) {
    return Object.values(obj).every((e) => e);
  }

  return { checkValidFields };
};
