export const useFetchData = () => {
  async function getData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      alert(
        `Произошла ошибка получения данных, статус ошибки - ${error.message}`
      );
    }
  }
  async function postData(url, body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
    } catch (e) {
      alert("Во время отправки данных произошла ошибка");
    }
  }

  async function patchData(id, body) {}
  return { getData, postData };
};
